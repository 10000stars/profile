"use client"

import { useEffect, useState } from "react";

export function TypewriterEffect({ words }) {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex].text;
    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 200);
      return () => clearTimeout(timeout);
    } else {
      // Pause, then go to next word
      const timeout = setTimeout(() => {
        setCharIndex(0);
        setWordIndex((wordIndex + 1) % words.length);
        setDisplayedText("");
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex, words]);

return (
  <div className="typewriter font-medium">
    {displayedText}
    <span className="blinking-cursor text-white text-2xl">|</span>
  </div>
);
}
