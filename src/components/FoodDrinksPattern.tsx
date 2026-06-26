import type { CSSProperties, ReactNode } from "react";

const STROKE = "#222222";
const STROKE_WIDTH = 1.75;

const ICON_IDS = [
  "fd-pizza-slice",
  "fd-whole-pizza",
  "fd-burger",
  "fd-fries",
  "fd-beer",
  "fd-cocktail",
  "fd-soft-drink",
  "fd-coffee",
  "fd-milkshake",
  "fd-popcorn",
  "fd-pretzel",
  "fd-hotdog",
  "fd-nachos",
  "fd-wings",
] as const;

type IconId = (typeof ICON_IDS)[number];

type Placement = {
  id: IconId;
  top: string;
  left: string;
  sizePct: number;
  rotate: number;
  opacity: number;
};

type Rect = { l: number; t: number; r: number; b: number };

type InternalIcon = {
  cx: number;
  cy: number;
  radius: number;
};

/** ~25px gap expressed as a percentage of a 1280px-wide section. */
const MIN_GAP_PCT = 1.95;

function mulberry32(seed: number) {
  let state = seed;

  return () => {
    state += 0x6d2b79f5;
    let t = state;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(items: T[], rand: () => number) {
  for (let i = items.length - 1; i > 0; i -= 1) {
    const j = Math.floor(rand() * (i + 1));
    [items[i], items[j]] = [items[j], items[i]];
  }
}

function inSafeZone(leftPct: number, topPct: number, zones: Rect[]) {
  return zones.some(
    (zone) =>
      leftPct >= zone.l && leftPct <= zone.r && topPct >= zone.t && topPct <= zone.b,
  );
}

/** Headings and intro copy only — cards and images stay readable via opaque backgrounds. */
const CONTENT_SAFE_ZONES: Rect[] = [
  { l: 26, t: 0, r: 74, b: 11 },
  { l: 24, t: 0, r: 50, b: 27 },
  { l: 50, t: 0, r: 76, b: 27 },
  { l: 8, t: 0, r: 92, b: 9 },
  { l: 8, t: 13, r: 92, b: 21 },
  { l: 8, t: 27, r: 92, b: 35 },
];

function collides(a: InternalIcon, b: InternalIcon, gap: number) {
  const distance = Math.hypot(a.cx - b.cx, a.cy - b.cy);
  return distance < a.radius + b.radius + gap;
}

function buildGridSlots(cols: number, rows: number) {
  const cellW = 100 / cols;
  const cellH = 100 / rows;
  const slots: Array<{ cx: number; cy: number; cellW: number; cellH: number }> = [];

  for (let row = 0; row < rows; row += 1) {
    const stagger = (row % 2) * (cellW / 2);

    for (let col = 0; col < cols; col += 1) {
      slots.push({
        cx: stagger + (col + 0.5) * cellW,
        cy: (row + 0.5) * cellH,
        cellW,
        cellH,
      });
    }
  }

  return slots;
}

function buildPlacementsForGrid({
  cols,
  rows,
  sizeMinPct,
  sizeMaxPct,
  targetCount,
  seed,
}: {
  cols: number;
  rows: number;
  sizeMinPct: number;
  sizeMaxPct: number;
  targetCount: number;
  seed: number;
}): Placement[] {
  const rand = mulberry32(seed);
  const iconPool = [...ICON_IDS];
  shuffle(iconPool, rand);

  const slots = buildGridSlots(cols, rows);
  shuffle(slots, rand);

  const placed: InternalIcon[] = [];
  const results: Placement[] = [];

  for (const slot of slots) {
    if (results.length >= targetCount) {
      break;
    }

    if (inSafeZone(slot.cx, slot.cy, CONTENT_SAFE_ZONES)) {
      continue;
    }

    const sizePct =
      sizeMinPct + rand() * (sizeMaxPct - sizeMinPct);
    const maxCell = Math.min(slot.cellW, slot.cellH);
    const fitSize = Math.min(sizePct, maxCell - MIN_GAP_PCT - 0.8);
    const radius = (fitSize / 2) * 1.06;

    const jitterLimit = Math.max(0, (maxCell - fitSize) / 2 - 0.9);
    const cx = slot.cx + (rand() - 0.5) * jitterLimit * 2;
    const cy = slot.cy + (rand() - 0.5) * jitterLimit * 2;

    const half = fitSize / 2;
    if (cx - half < 0.5 || cy - half < 0.5 || cx + half > 99.5 || cy + half > 99.5) {
      continue;
    }

    const candidate: InternalIcon = { cx, cy, radius };

    if (placed.some((existing) => collides(candidate, existing, MIN_GAP_PCT))) {
      continue;
    }

    placed.push(candidate);

    results.push({
      id: iconPool[results.length % iconPool.length],
      left: `${cx - half}%`,
      top: `${cy - half}%`,
      sizePct: fitSize,
      rotate: -20 + Math.floor(rand() * 41),
      opacity: 0.06 + (results.length % 3) * 0.01,
    });
  }

  return results;
}

const DESKTOP_PLACEMENTS = buildPlacementsForGrid({
  cols: 8,
  rows: 12,
  sizeMinPct: 6.2,
  sizeMaxPct: 9.4,
  targetCount: 68,
  seed: 0x706c6179,
});

const MOBILE_PLACEMENTS = buildPlacementsForGrid({
  cols: 5,
  rows: 14,
  sizeMinPct: 14,
  sizeMaxPct: 18.5,
  targetCount: 52,
  seed: 0x706c617a,
});

function FoodDrinksSymbolSprite() {
  const pathProps = {
    fill: "none",
    stroke: STROKE,
    strokeWidth: STROKE_WIDTH,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg aria-hidden className="absolute h-0 w-0 overflow-hidden">
      <defs>
        <symbol id="fd-pizza-slice" viewBox="0 0 64 64">
          <path {...pathProps} d="M32 10 54 50H10L32 10Z" />
          <path {...pathProps} d="M32 10v40" />
          <circle {...pathProps} cx="28" cy="34" r="1.5" />
          <circle {...pathProps} cx="36" cy="28" r="1.5" />
        </symbol>
        <symbol id="fd-whole-pizza" viewBox="0 0 64 64">
          <circle {...pathProps} cx="32" cy="32" r="22" />
          <path {...pathProps} d="M32 10v44M10 32h44M16 16l32 32M48 16 16 48" />
        </symbol>
        <symbol id="fd-burger" viewBox="0 0 64 64">
          <path {...pathProps} d="M14 24c0-5 10-8 18-8s18 3 18 8" />
          <path {...pathProps} d="M12 30h40M10 34h44M12 38h40" />
          <path {...pathProps} d="M14 42c0 5 10 8 18 8s18-3 18-8" />
        </symbol>
        <symbol id="fd-fries" viewBox="0 0 64 64">
          <path {...pathProps} d="M18 22h28l4 34H14l4-34Z" />
          <path {...pathProps} d="M24 22V14M32 22V12M40 22V15" />
          <path {...pathProps} d="M22 30h20M21 38h22" />
        </symbol>
        <symbol id="fd-beer" viewBox="0 0 64 64">
          <path {...pathProps} d="M22 16h16v34c0 4-16 4-16 0V16Z" />
          <path {...pathProps} d="M38 22h6c2 0 4 2 4 8s-2 8-4 8h-6" />
          <path {...pathProps} d="M22 24h16M22 32h16" />
        </symbol>
        <symbol id="fd-cocktail" viewBox="0 0 64 64">
          <path {...pathProps} d="M20 18h24L32 42 20 18Z" />
          <path {...pathProps} d="M32 42v8M24 50h16" />
          <path {...pathProps} d="M22 18c4-4 16-4 20 0" />
        </symbol>
        <symbol id="fd-soft-drink" viewBox="0 0 64 64">
          <path {...pathProps} d="M24 20h16l-2 32H26L24 20Z" />
          <path {...pathProps} d="M22 20h20M38 12l6-4M28 30h8" />
        </symbol>
        <symbol id="fd-coffee" viewBox="0 0 64 64">
          <path {...pathProps} d="M18 24h24v22c0 4-24 4-24 0V24Z" />
          <path {...pathProps} d="M42 28h4c3 0 5 2 5 6s-2 6-5 6h-4" />
          <path {...pathProps} d="M22 18h4M30 16h4M38 18h4" />
        </symbol>
        <symbol id="fd-milkshake" viewBox="0 0 64 64">
          <path {...pathProps} d="M24 18h16l-4 34H28L24 18Z" />
          <path {...pathProps} d="M40 14l8-6M26 28h12" />
        </symbol>
        <symbol id="fd-wings" viewBox="0 0 64 64">
          <path {...pathProps} d="M18 36c8-10 18-18 28-20-6 8-8 18-6 28-10-4-18-4-22-8Z" />
          <path {...pathProps} d="M36 16c4 6 4 14 0 20" />
        </symbol>
        <symbol id="fd-popcorn" viewBox="0 0 64 64">
          <path {...pathProps} d="M18 28h28l-4 24H22l-4-24Z" />
          <path {...pathProps} d="M22 20c2-4 4-6 6-4s2 6 4 4 4-6 6-4 2 6 4 4" />
        </symbol>
        <symbol id="fd-hotdog" viewBox="0 0 64 64">
          <path {...pathProps} d="M14 34c10-8 26-8 36 0s10 8 0 16-26 8-36 0-10-8 0-16Z" />
          <path {...pathProps} d="M18 34h28" />
        </symbol>
        <symbol id="fd-pretzel" viewBox="0 0 64 64">
          <path
            {...pathProps}
            d="M20 22c0-6 8-8 12-4s4 10 0 14-10 6-10 12 8 10 14 6 10-8 4-14-4-10-10-8"
          />
        </symbol>
        <symbol id="fd-nachos" viewBox="0 0 64 64">
          <path {...pathProps} d="M16 42 28 18l12 24 12-18 8 24H16Z" />
          <path {...pathProps} d="M22 36h20" />
        </symbol>
      </defs>
    </svg>
  );
}

function PatternGlyph({
  symbolId,
  sizePct,
  rotate,
  opacity,
  style,
}: {
  symbolId: IconId;
  sizePct: number;
  rotate: number;
  opacity: number;
  style: CSSProperties;
}) {
  return (
    <div
      className="absolute aspect-square origin-top-left"
      style={{
        ...style,
        width: `${sizePct}%`,
      }}
    >
      <div
        className="h-full w-full"
        style={{
          transform: `rotate(${rotate}deg)`,
          opacity,
        }}
      >
        <svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
          <use href={`#${symbolId}`} />
        </svg>
      </div>
    </div>
  );
}

function PatternLayer({ placements }: { placements: Placement[] }) {
  return (
    <>
      {placements.map((placement, index) => (
        <PatternGlyph
          key={`${placement.id}-${index}`}
          symbolId={placement.id}
          sizePct={placement.sizePct}
          rotate={placement.rotate}
          opacity={placement.opacity}
          style={{
            top: placement.top,
            left: placement.left,
          }}
        />
      ))}
    </>
  );
}

export function FoodDrinksPattern() {
  return (
    <>
      <FoodDrinksSymbolSprite />
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="md:hidden">
          <PatternLayer placements={MOBILE_PLACEMENTS} />
        </div>
        <div className="hidden md:block">
          <PatternLayer placements={DESKTOP_PLACEMENTS} />
        </div>
      </div>
    </>
  );
}

type FoodDrinksCreamSectionProps = {
  children: ReactNode;
  className?: string;
};

export function FoodDrinksCreamSection({
  children,
  className = "",
}: FoodDrinksCreamSectionProps) {
  return (
    <section className={`relative bg-[#fff3dd] ${className}`}>
      <FoodDrinksPattern />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
