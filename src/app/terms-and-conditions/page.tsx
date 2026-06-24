import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Playard",
  description:
    "Terms and Conditions for Playard Peterborough including bookings, activities, events and website usage.",
};

type TermsSection = {
  title: string;
  paragraphs?: string[];
  list?: string[];
  subsections?: { title: string; paragraphs: string[] }[];
  footer?: string;
};

const sections: TermsSection[] = [
  {
    title: "1. About Playard",
    paragraphs: [
      "Playard Peterborough is a competitive social gaming and entertainment venue at 26 Hereward Cross, Peterborough, PE1 1TE, United Kingdom.",
      "These Terms and Conditions govern your use of the Playard website, your visit to the venue, and your participation in activities, bookings, food and drink, gift cards, parties, corporate events and other services we provide.",
      "By using our website, making a booking, purchasing a gift card or visiting Playard, you agree to these Terms. If you do not agree, you should not use our website or services.",
      "Playard reserves the right to refuse service, cancel bookings or remove guests where necessary for operational, safety, licensing or legal reasons.",
    ],
  },
  {
    title: "2. Website Use",
    paragraphs: [
      "Our website is provided for general information about Playard Peterborough, including activities, bookings, parties, corporate events, food and drinks, gift cards and venue information.",
      "You may use our website only for lawful purposes and in a way that does not infringe the rights of others or restrict their use of the website.",
      "All website content, including text, images, branding, logos, design and layout, is owned by or licensed to Playard and is protected by intellectual property laws. You must not copy, reproduce, distribute or exploit website content without our prior written permission.",
      "You must not misuse the website, attempt unauthorised access, introduce harmful code, scrape content without permission, interfere with website operation or use the website in a misleading, fraudulent or abusive manner.",
      "We make reasonable efforts to ensure website information is accurate and up to date, but we do not guarantee that all content is complete, current or error free. Website content does not form part of a contract unless expressly stated during a confirmed booking process.",
    ],
  },
  {
    title: "3. Bookings & Payments",
    paragraphs: [
      "All bookings are subject to availability. A booking is not confirmed until you receive confirmation from Playard or our booking platform.",
      "Prices displayed on our website or booking system may change before booking confirmation. Once a booking is confirmed, it will normally be honoured at the agreed price unless otherwise stated or required by law.",
      "Payments must be made using valid payment methods. Payments are handled securely through third party payment providers. Playard does not store full payment card details on its own systems.",
      "Bookings and gift card purchases may be processed through Funbutler, our booking and gift card platform. When you book through Funbutler, you may also be subject to Funbutler's own terms and privacy policy.",
      "Third party payment providers process payments in accordance with their own security standards and terms. Playard is not responsible for payment processing failures caused by your bank, card issuer or payment provider.",
      "Playard may refuse or cancel bookings where necessary for operational, safety, licensing, capacity or legal reasons.",
    ],
  },
  {
    title: "4. Booking Amendments",
    paragraphs: [
      "If you need to amend a booking, please contact us as soon as possible at info@playard.co.uk or on 01733 641062.",
      "Amendments are subject to availability and may not always be possible, particularly at short notice or during busy periods.",
      "Changes to date, time, activity, group size or event arrangements may incur additional charges. Any applicable charges will be explained before an amendment is confirmed.",
      "Special terms may apply to group bookings, parties, corporate events and private hire. Those terms may be agreed separately in writing where relevant.",
    ],
  },
  {
    title: "5. Cancellation & Refund Policy",
    paragraphs: [
      "Unless otherwise stated at the time of booking or agreed in writing for a group event or private hire, the following cancellation policy applies:",
    ],
    list: [
      "Cancellations made at least 24 hours before the scheduled booking time may be eligible for a refund or rebooking, subject to the booking type and payment method used",
      "Cancellations made with less than 24 hours' notice may not be eligible for a refund",
      "No refunds will be given for no shows",
      "Late arrivals may lose activity time. Playard is not obliged to extend sessions where a guest arrives late",
      "Group bookings, parties, corporate events and private hire may have separate cancellation and refund terms, which will be provided at the time of booking or in your event agreement",
      "Where a technical fault, equipment failure or operational issue prevents an activity from taking place as booked, Playard may, at management discretion, offer an alternative booking, venue credit or refund",
    ],
    footer:
      "Confirmed bookings will normally be honoured at the agreed price unless cancellation terms apply or Playard is unable to provide the service for reasons permitted under these Terms.",
  },
  {
    title: "6. Entry Requirements",
    paragraphs: [
      "Entry to Playard Peterborough is subject to venue policies, licensing conditions and staff discretion.",
    ],
    list: [
      "Valid photographic ID may be requested at any time, particularly where alcohol is being served or age restrictions apply",
      "Challenge 25 applies. If you appear under 25, you may be asked to prove that you are 18 or over before alcohol is served",
      "Bag searches may be carried out where appropriate for safety, licensing or security reasons",
      "Playard may refuse entry or remove guests who appear intoxicated, behave aggressively, pose a safety risk or fail to comply with these Terms or staff instructions",
      "Entry may be refused within one hour of closing or at other times where required for operational or licensing reasons",
      "All guests must comply with licensing conditions, house rules and any instructions given by Playard staff",
    ],
  },
  {
    title: "7. House Rules",
    paragraphs: [
      "To keep Playard safe, enjoyable and compliant with licensing requirements, all guests must follow our house rules, including:",
    ],
    list: [
      "Treat staff and other guests with respect at all times",
      "Follow activity rules, safety briefings and staff instructions",
      "Use equipment only for its intended purpose",
      "Keep walkways clear and avoid running unless permitted as part of an activity",
      "Report accidents, spills, damage or safety concerns to staff immediately",
      "Do not bring outside food or drink except where approved exceptions apply",
      "Do not smoke or vape except in any designated area if provided",
      "Do not enter staff-only areas without permission",
      "Comply with age restrictions, supervision requirements and time limits for young people",
      "Leave the venue when requested at closing time or if asked to do so by management",
    ],
    footer:
      "Playard may update house rules from time to time. Notices may be displayed in venue and on our website where appropriate.",
  },
  {
    title: "8. Code of Conduct",
    paragraphs: [
      "Playard is a social venue for games, food, drinks and group experiences. All guests are expected to behave responsibly and respectfully.",
    ],
    list: [
      "Respect staff and other guests at all times",
      "No abusive, threatening, discriminatory or aggressive behaviour",
      "No harassment of staff or other customers",
      "No excessive intoxication",
      "No vandalism or deliberate damage to the venue or equipment",
      "No misuse of equipment, activities or facilities",
      "Follow all staff instructions promptly and courteously",
      "Respect other customers' enjoyment of the venue",
    ],
    footer:
      "Playard may remove guests from the venue without refund where behaviour affects safety, licensing compliance or the enjoyment of others. In serious cases, future entry may be refused and relevant authorities may be contacted.",
  },
  {
    title: "9. Children & Young People",
    paragraphs: [
      "Playard welcomes families and groups, but the following rules apply:",
    ],
    list: [
      "Children under 14 must be accompanied by an adult at all times while at Playard",
      "Under 18s must leave by 8pm under Playard house policy",
      "No under 18s are permitted on the premises after 9pm due to licensing conditions",
      "Parents and guardians remain responsible for supervising children in their care and for ensuring they follow venue rules",
    ],
    footer:
      "Certain activities may have additional age, height or supervision requirements. These will be explained at booking or on arrival where relevant.",
  },
  {
    title: "10. Activities & Participation",
    paragraphs: [
      "All activities at Playard are undertaken at the participant's own risk, subject to these Terms and applicable law.",
      "Guests must be medically fit to participate in activities. You should not take part if you are pregnant, recovering from injury, affected by alcohol or drugs, or have a medical condition that may be made worse by participation unless you have assessed the risk and accept responsibility for doing so.",
      "Participants must stop immediately if they feel unwell, dizzy, disorientated, in pain or otherwise unfit to continue, and must notify staff.",
      "Guests must follow all safety briefings, activity rules and instructions given by Playard staff. Failure to do so may result in removal from the activity or venue without refund.",
      "Playard reserves the right to pause, modify or stop activities for safety, maintenance, operational or licensing reasons.",
    ],
  },
  {
    title: "11. Activity Specific Risks",
    paragraphs: [
      "In addition to the general risks of participation, guests should be aware that activities may involve slips, trips, falls, collisions, projectiles, equipment contact, motion sickness, dizziness, disorientation and other physical risks if rules are not followed or if participants exceed their physical capability.",
    ],
    subsections: [
      {
        title: "Interactive Darts",
        paragraphs: [
          "Involves throwing projectiles in a controlled lane environment. Risks include slips, trips, impact from darts or equipment, and injury if safety rules are ignored or guests enter activity areas improperly.",
        ],
      },
      {
        title: "Pool",
        paragraphs: [
          "Involves use of cues and balls on a playing surface. Risks include slips, trips, contact with equipment or other players, and injury from misuse of cues or reckless play.",
        ],
      },
      {
        title: "Shuffleboard",
        paragraphs: [
          "Involves sliding equipment along a playing surface. Risks include slips, trips, contact with equipment or other players, and injury from misuse or failure to follow lane rules.",
        ],
      },
      {
        title: "Street Curling",
        paragraphs: [
          "Involves sliding stones and movement on a playing surface. Risks include slips, trips, collisions with other players or equipment, and injury from failure to follow activity instructions.",
        ],
      },
      {
        title: "Virtual Reality",
        paragraphs: [
          "Involves immersive headsets and active movement in a defined play area. Risks include motion sickness, dizziness, disorientation, trips, collisions with objects, walls or other players, and injury if boundaries or safety instructions are ignored.",
        ],
      },
      {
        title: "SimHunt",
        paragraphs: [
          "Involves simulated shooting activities and active movement. Risks include slips, trips, contact with equipment, disorientation, and injury from misuse of equipment or failure to follow safety briefings.",
        ],
      },
    ],
  },
  {
    title: "12. Food & Drinks",
    paragraphs: [
      "Food and drinks are available for consumption at Playard while you play, socialise or attend events.",
    ],
    list: [
      "Outside food and drink is not permitted except where approved exceptions have been agreed in advance by Playard",
      "Alcohol is sold under Playard's licensing conditions and only to eligible customers",
      "All guests must consume food and drink responsibly",
      "Playard may refuse service of alcohol where Challenge 25 requirements are not met or where a guest appears intoxicated",
      "Menu items, availability and pricing may change without notice",
    ],
  },
  {
    title: "13. Alcohol Licensing & Challenge 25",
    paragraphs: [
      "Playard operates under alcohol licensing laws applicable in England.",
    ],
    list: [
      "Challenge 25 applies. If you appear under 25, you may be asked to provide valid photographic ID proving you are 18 or over",
      "Playard reserves the right to refuse service of alcohol to any guest",
      "No alcohol will be supplied to under 18s",
      "Alcohol must not be brought into the venue",
      "Alcohol purchased at Playard must not be removed from the venue unless expressly permitted by law and venue policy",
    ],
    footer:
      "Management decisions relating to alcohol service are final where made to comply with licensing law and venue policy.",
  },
  {
    title: "14. Allergens",
    paragraphs: [
      "Playard takes allergen management seriously and complies with applicable food information requirements, including Natasha's Law where relevant to prepacked for direct sale items.",
      "Our kitchen and service areas handle multiple ingredients. Cross contamination cannot be completely eliminated.",
      "Customers with allergies or dietary requirements should notify staff before ordering. An allergen matrix is available on request.",
      "While we take reasonable steps to provide accurate allergen information, customers remain responsible for making informed choices based on the information provided and their own medical needs.",
    ],
  },
  {
    title: "15. Photography & Social Media",
    paragraphs: [
      "Promotional photography and video may take place at Playard for marketing, social media, website content or press purposes.",
      "If you do not wish to appear in promotional content, please inform a member of staff during your visit and we will make reasonable efforts to accommodate your request.",
      "Guests are responsible for obtaining consent from other people before photographing or filming them where appropriate.",
    ],
  },
  {
    title: "16. CCTV & Security",
    paragraphs: [
      "Playard uses closed circuit television (CCTV) at the venue for:",
    ],
    list: [
      "Crime prevention and detection",
      "Customer safety",
      "Staff safety",
      "Licensing compliance",
    ],
    footer:
      "CCTV footage is generally retained for approximately 30 days unless a longer retention period is reasonably required for incident investigation, insurance, legal or regulatory purposes. For more information, please see our Privacy Policy.",
  },
  {
    title: "17. Personal Property",
    paragraphs: [
      "Guests are responsible for their personal belongings at all times.",
      "Playard is not responsible for loss, theft or damage to personal property brought into the venue, except where liability cannot be excluded by law.",
      "Items left behind may be retained for a limited period and then disposed of if unclaimed.",
    ],
  },
  {
    title: "18. Damage to Equipment & Venue",
    paragraphs: [
      "Guests must use Playard equipment, furniture and facilities responsibly.",
      "Customers may be charged for damage caused through negligence, misuse or intentional acts, including damage to gaming equipment, furniture, fixtures, glassware and other venue property.",
      "Playard may require payment for repair or replacement and may refuse future entry where damage is serious or repeated.",
    ],
  },
  {
    title: "19. Gift Cards, Offers & Promotions",
    paragraphs: [
      "Gift cards, offers and promotions are subject to availability and may include additional terms communicated at the time of purchase or promotion.",
    ],
    list: [
      "Gift cards are subject to separate gift card terms and conditions",
      "Promotions may change, be withdrawn or end without notice",
      "Offers are subject to availability and may not be combined unless expressly stated",
      "Misuse of promotions or gift cards may result in cancellation of the offer and refusal of service",
    ],
  },
  {
    title: "20. Privacy & Data Protection",
    paragraphs: [
      "Playard processes personal information in accordance with UK data protection law. Our Privacy Policy explains how we collect, use and protect personal data and is available separately on this website.",
      "We may use website analytics and advertising technologies including Google Analytics, Microsoft Clarity and Meta Pixel, subject to applicable consent requirements where required.",
      "Bookings and gift card purchases may be processed through Funbutler. Cookies and similar technologies may be used on our website as explained in our Cookie Policy.",
      "By using our website and services, you acknowledge that you have read our Privacy Policy and Cookie Policy where relevant.",
    ],
  },
  {
    title: "21. Limitation of Liability",
    paragraphs: [
      "Nothing in these Terms and Conditions excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability that cannot legally be excluded or limited under UK law.",
      "Subject to the paragraph above, Playard shall not be liable for any indirect or consequential loss, loss of profit, loss of opportunity or loss of enjoyment arising from your use of the website, venue or services.",
      "Subject to applicable law, Playard's total liability to you in connection with any booking, visit or use of services shall be limited to the amount paid by you to Playard for the relevant booking or service giving rise to the claim, except where a greater liability is required by law.",
      "These Terms do not affect your statutory rights as a consumer where applicable.",
    ],
  },
  {
    title: "22. Force Majeure",
    paragraphs: [
      "Playard shall not be liable for failure to provide services, delays or changes caused by circumstances beyond our reasonable control.",
      "Such circumstances may include severe weather, power failure, equipment or technical failure, fire, flood, staff shortages, supplier failure, government restrictions, licensing restrictions, public health requirements or other events outside our reasonable control.",
      "Where a force majeure event affects a booking or event, Playard will use reasonable efforts to offer an alternative date, credit or refund where appropriate.",
    ],
  },
  {
    title: "23. Complaints Procedure",
    paragraphs: [
      "If you have a concern during your visit, please speak to a member of staff as soon as possible so we can try to resolve the issue on the spot.",
      "If you wish to make a formal complaint after your visit, please email info@playard.co.uk with as much detail as possible, including your booking reference, visit date, activity or event type and the nature of your complaint.",
      "We aim to review complaints fairly and respond within a reasonable timeframe.",
    ],
  },
  {
    title: "24. Changes to These Terms",
    paragraphs: [
      "Playard may update these Terms and Conditions from time to time to reflect changes to our services, legal requirements or business practices.",
      "The latest version will always be published on this page. Continued use of the website or services after changes are posted constitutes acceptance of the updated Terms, except where otherwise required by law.",
    ],
  },
];

function TermsCard({ section }: { section: TermsSection }) {
  return (
    <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
      <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">
        {section.title}
      </h2>
      {section.paragraphs?.map((paragraph) => (
        <p
          key={paragraph}
          className="mb-4 text-lg font-bold leading-8 text-black"
        >
          {paragraph}
        </p>
      ))}
      {section.list ? (
        <ul className="mb-4 list-disc space-y-2 pl-6 text-lg font-bold leading-8 text-black">
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      {section.subsections?.map((subsection) => (
        <div key={subsection.title} className="mb-4">
          <h3 className="mb-2 text-2xl font-black uppercase tracking-[-0.04em] text-black">
            {subsection.title}
          </h3>
          {subsection.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="mb-2 text-lg font-bold leading-8 text-black"
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}
      {section.footer ? (
        <p className="text-lg font-bold leading-8 text-black">{section.footer}</p>
      ) : null}
    </div>
  );
}

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff3dd] text-black">
      <section className="relative isolate flex min-h-[70vh] items-center overflow-hidden bg-black px-6 py-24 text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(215,25,32,0.40),transparent_24rem),radial-gradient(circle_at_80%_20%,rgba(0,212,255,0.20),transparent_24rem)]" />

        <div className="mx-auto max-w-5xl">
          <div className="mb-8 inline-flex rotate-[-3deg] bg-[#d71920] px-5 py-3 text-sm font-black uppercase tracking-[0.22em] text-white shadow-2xl">
            Legal Information
          </div>

          <h1 className="mb-8 text-[4rem] font-black uppercase leading-[0.82] tracking-[-0.08em] md:text-[7rem]">
            TERMS &
            <br />
            CONDITIONS.
          </h1>

          <p className="max-w-4xl bg-black/50 p-6 text-xl font-bold leading-8 text-white md:text-2xl md:leading-10">
            Information about bookings, activities, events, venue usage and the Playard website.
          </p>
        </div>
      </section>

      <section className="bg-[#fff3dd] px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-8">
          {sections.map((section) => (
            <TermsCard key={section.title} section={section} />
          ))}

          <div className="border-4 border-black bg-white p-8 shadow-xl transition hover:-translate-y-1">
            <h2 className="mb-4 text-4xl font-black uppercase tracking-[-0.04em]">
              25. Contact
            </h2>
            <p className="mb-6 text-lg font-bold leading-8 text-black">
              If you have any questions about these Terms and Conditions,
              bookings, activities, events, refunds or venue policies, please
              contact us:
            </p>
            <div className="border-4 border-black bg-[#00d4ff] p-8 text-black shadow-xl">
              <p className="mb-2 font-bold">Playard Peterborough</p>
              <p className="font-bold">26 Hereward Cross</p>
              <p className="font-bold">Peterborough</p>
              <p className="font-bold">PE1 1TE</p>
              <p className="mt-4 font-bold">Email: info@playard.co.uk</p>
              <p className="font-bold">Phone: 01733 641062</p>
            </div>
          </div>

          <div className="border-4 border-black bg-[#d71920] p-6 text-center text-white shadow-xl">
            <p className="text-sm font-black uppercase tracking-[0.22em]">
              Last Updated: June 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl border-4 border-white p-8 shadow-2xl md:p-14">
          <h2 className="mb-6 text-6xl font-black uppercase tracking-[-0.06em] md:text-8xl">
            QUESTIONS?
          </h2>

          <p className="mb-8 max-w-3xl text-xl font-bold leading-9 text-zinc-300">
            If you have any questions regarding bookings, activities, events, refunds or venue policies, please contact the Playard team.
          </p>

          <a
            href="mailto:info@playard.co.uk?subject=Terms and Conditions Enquiry"
            className="inline-block bg-[#d71920] px-8 py-4 font-black uppercase tracking-wide text-white transition hover:scale-[1.03]"
          >
            Contact Playard
          </a>
        </div>
      </section>
    </main>
  );
}
