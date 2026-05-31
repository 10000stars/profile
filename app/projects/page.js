"use client";
import { StarsBackground } from "@/components/ui/starbg";
import { Animatedprojects } from "@/components/ui/projectlist";
import MemorabiliaGallery from "@/components/ui/memorabilia-gallery"
import dynamic from 'next/dynamic';



export default function Projects() {
  return (
     <section className="about-section relative overflow-hidden min-h-screen text-white">
         <StarsBackground className="-z-10" />
      <h1 className="about-title font-bold">Projects</h1>
      <Animatedprojects />
      <h2 className="text-2xl mt-5 font-semibold z-2">Memorabilia</h2>
      
     <MemorabiliaGallery />
     </section>
  );
}
