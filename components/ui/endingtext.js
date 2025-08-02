"use client";
import { TextGenerateEffect } from "./text-generate";

const words = `Thank you for visiting!
`;

export function Endtext() {
  return <TextGenerateEffect duration={5} filter={false} words={words} />;
}
