import { createElement } from "react";
import FunbutlerScripts from "@/components/FunbutlerScripts";

type FunbutlerSideCartProps = {
  clientId: string;
};

export default function FunbutlerSideCart({ clientId }: FunbutlerSideCartProps) {
  return (
    <>
      <FunbutlerScripts />
      {createElement("side-cart", { clientId })}
    </>
  );
}
