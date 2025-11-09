import { FocusCards } from "@/components/ui/focus-cards";

export function Memorabiliagrid() {
  const cards = [
    {
      title: "Forest Adventure",
      src: "",
    },
    {
      title: "Valley of life",
      src: "",
    },
    {
      title: "Sala behta hi jayega",
      src: "",
    }
  ];

  return <FocusCards cards={cards} />;
}
