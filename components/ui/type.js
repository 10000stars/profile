"use client"

import { TypewriterEffect } from "./typewriter-effect";

export function Typewriter() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TypewriterEffect words={[
    { text: "Aspiring Geologist" },
    { text: "Field Explorer" },
    { text: "Map Enthusiast" },
    { text: "Rock Nerd" },
    { text: "Armchair Historian" },
  ]} />
    
    </div>
  );
}
