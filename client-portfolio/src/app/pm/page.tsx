import { Metadata } from "next";
import PMContent from "./PMContent"; // We move the UI logic here

export const metadata: Metadata = {
  title: "The Strategist | Project Manager Portfolio",
  description:
    "Transforming chaos into clarity through Agile alchemy and strategic execution.",
};

export default function PMPage() {
  return <PMContent />;
}
