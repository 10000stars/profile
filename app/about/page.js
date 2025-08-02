import { SkillsTool } from "@/components/ui/skills";
import { StarsBackground } from "@/components/ui/starbg";
import { ShootingStars } from "@/components/ui/shootingstar";

export default function About() {
  return (
   <section className="about-section relative overflow-hidden text-white">
     <StarsBackground className="-z-10" />
     <ShootingStars className="-z-5" />
  <h1 className="about-title font-bold">About Me</h1>
  <div className="about-container">
    <img src="/images/profile.jpg" alt="My portrait" className="about-image" />
    <p className="about-text">
      I graduated with a Bachelor in Earth Sciences in the summer of 2025, specialising in Geosciences with particular 
      interests in sedimentology, geomorphology, and tectonics. Fieldwork has taken me to British Columbia, California, and 
      New South Wales — and I'm excited to see where the trails lead me next.
      <br /><br />
      When I'm not staring at rocks, I'm probably exploring the outdoors, disovering hidden corners of a city, 
      wandering through museums, disappearing into a good book  — or just lazing around on a cozy afternoon.
    </p>
  </div>

  <div className="mt-10 text-center">
  <h2 className="text-xl font-semibold mb-3">Familiar With:</h2>

  {/* Skill Tags Row */}
  <div className="flex flex-wrap justify-center gap-2 mb-3">
  <span className="bg-emerald-300 text-sm text-gray-900 px-3 py-1.5 rounded-md border border-gray-300">
    Google Earth Engine
  </span>
  <span className="bg-emerald-300 text-sm text-gray-900 px-3 py-1.5 rounded-md border border-gray-300">
    Geospatial Analysis
  </span>
  <span className="bg-emerald-300 text-sm text-gray-900 px-3 py-1.5 rounded-md border border-gray-300">
    Ground Penetrating Radar
  </span>
</div>  

{/* Icons Row*/}
  <div className="flex flex-wrap justify-center gap-6">
    <SkillsTool/>
  </div>



</div>


<section className="relative z-2">
  <div className="mt-8 flex flex-wrap justify-center gap-4">
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-yellow-400 hover:bg-yellow-200 text-gray-800 font-medium py-2 px-6 rounded-full transition-colors duration-200"
    >
      Download Resume
    </a>
    <a
      href="#contact"
      className="bg-yellow-400 hover:bg-yellow-200 text-gray-800 font-medium py-2 px-6 rounded-full transition-colors duration-200"
    >
      Contact Me
    </a>
  </div>
</section>


</section>

  );
}
