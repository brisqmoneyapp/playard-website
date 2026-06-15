import { createElement } from "react";
import FunbutlerScripts from "@/components/FunbutlerScripts";

type FunbutlerGiftCardsProps = {
  clientId: string;
};

export default function FunbutlerGiftCards({ clientId }: FunbutlerGiftCardsProps) {
  return (
    <div className="min-h-[520px] border-4 border-black bg-[#fff3dd] p-4 sm:p-6">
      <FunbutlerScripts />

      {createElement(
        "gift-card-store",
        { clientId },
        <div id="main-loader" className="loader-wrapper">
          <div className="loader-icon large padded"></div>
        </div>,
      )}
    </div>
  );
}