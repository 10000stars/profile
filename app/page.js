"use client"

import { useEffect, useRef, useState } from "react";
import About from "./about/page";
import Homepage from "./home/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import NavBar from "@/components/navbar";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const thresholds = {
      home: 0.6,
      about: 0.6,
      projects: 0.2, 
      contact: 0.9,
    };

    const observers = [];

    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (!ref.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        { threshold: thresholds[key] }
      );

      observer.observe(ref.current);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <main>
      <NavBar activeSection={activeSection} />
      <section id="home" ref={sectionRefs.home}>
        <Homepage />
      </section>
      <section id="about" ref={sectionRefs.about}>
        <About />
      </section>
      <section id="projects" ref={sectionRefs.projects}>
        <Projects />
      </section>
      <section id="contact" ref={sectionRefs.contact}>
        <Contact />
      </section>
    </main>
  );
}
