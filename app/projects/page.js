"use client";
import { StarsBackground } from "@/components/ui/starbg";
import { Animatedprojects } from "@/components/ui/projectlist";
import dynamic from 'next/dynamic';

// Dynamic import with no SSR
const WorldMap = dynamic(() => import('@/components/ui/worldmap'), { 
  ssr: false,
  loading: () => <div className="h-[80vh] bg-slate-900 flex items-center justify-center text-white">Loading map...</div>
});

export default function Projects() {
  return (
     <section className="about-section relative overflow-hidden min-h-screen text-white">
         <StarsBackground className="-z-10" />
      <h1 className="about-title font-bold">Projects</h1>
      <Animatedprojects />
      <h2 className="text-2xl mt-5 font-semibold z-2">Memorabilia</h2>
      
      <WorldMap /> 
     </section>
  );
}
