"use client";

import { Typewriter } from "@/components/ui/type";

export default function Homepage() {
  return (
    <>
      <section className="home-section" id="home">
        <div className="overlay">
          <h1>Wanxin Huang</h1>
          <div className="tagline">
          <Typewriter /></div>
       <div className="socials">
        <a href="https://github.com/10000stars" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.simpleicons.org/github/ffffff" alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/hwanxin/" target="_blank" rel="noopener noreferrer">
            <img src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="LinkedIn" />
        </a>
        <a href="mailto:hwanxin20@gmail.com">
            <img src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg" alt="Email" />
        </a>   
        </div>
        </div>
      </section>
    </>
  );
}
