import { SkillsTool } from "@/components/ui/skills";
import { StarsBackground } from "@/components/ui/starbg";
import { ShootingStars } from "@/components/ui/shootingstar";

const basePath =
  process.env.NODE_ENV === "production" ? "/profile" : "";

export default function About() {
  return (
   <section className="about-section relative overflow-hidden text-white">
     <StarsBackground className="-z-10" />
     <ShootingStars className="-z-5" />
  <h1 className="about-title font-bold">About Me</h1>
  <div className="about-container">
    <img src={`${basePath}/images/profile.jpg`} alt="My portrait" className="about-image" />
    <p className="about-text">
      I graduated with a Bachelor in Earth Sciences in the summer of 2025, with interests in sedimentology, geomorphology, and tectonics. Fieldwork has taken me to diverse and inspiring landscapes around the world, and I firmly believe that the best way to understand our Earth is to actually stand on it.
      <br /><br />
      When I'm not staring at rocks, I'm probably out exploring, wandering through museums, disappearing into a good book, or just lazing around on a cozy afternoon.
    </p>
  </div>

  <div className="mt-6 text-center space-y-4">

{/* Icons Row*/}
  <div className="flex flex-wrap justify-center gap-6">
    <SkillsTool/>
  </div>
</div>


<section className="relative z-2">
  <div className="mt-8 flex flex-wrap justify-center gap-4">
    <a
      href={`${basePath}/resume.pdf`}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-yellow-200 hover:bg-amber-600 text-gray-800 font-medium py-2 px-6 rounded-full transition-colors duration-200"
    >
      Download Resume
    </a>
    <a
      href="#contact"
      className="bg-yellow-200 hover:bg-amber-600 text-gray-800 font-medium py-2 px-6 rounded-full transition-colors duration-200"
    >
      Contact Me
    </a>
  </div>
</section>


</section>

  );
}
