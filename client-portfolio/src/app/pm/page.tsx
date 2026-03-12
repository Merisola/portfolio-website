import { Metadata } from "next";
import PMContent from "./PMContent"; // We move the UI logic here

export const metadata: Metadata = {
  title: "The Alchemist | PM & Fullstack Dev",
  description: "Transforming challenges into clarity and code into potential.",
  icons: {
    icon: "/fav.ico", // Path to your icon in the /public folder
  },
};
export default function PMPage() {
  return <PMContent />;
}
