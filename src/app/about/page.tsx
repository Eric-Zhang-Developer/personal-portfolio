

// Decidied to have a longer about page and not two seperate pages
// Reason being that its cool to have a scroll. 

import { techName } from "@/types/tech-name";
import TechCard from "@/components/core/tech-card";
const techs: techName[] = [
  {name: "Javascript"}
]

export default function About() {
  return (
    <>
      {/* Intro to about me page */}
      <section className="flex flex-col container mx-auto items-center text-primary min-h-screen">
        <h1 className="text-4xl mt-6">About Me</h1>
        <p className="mt-2 text-secondary text-lg text-center p-4 lg:p-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident
        </p>
        <div className="flex items-center justify-center flex-col mt-6">
          <span className="text-accent">Scroll</span>
          <div className="h-32 w-px bg-gradient-to-b from-accent
          to-transparent animate-bounce mt-8"></div>
        </div>
      </section>
      {/* More about me and tech stack */}
      <section className="flex flex-row container mx-auto">
        <div className="flex flex-col"></div>
          <h2>More About Me</h2>
        <h2 className="">Tech Stack</h2>
          {techs.map((tech) => (
            <TechCard key={tech.name} tech={tech}></TechCard>
          ))}


      </section>
    </>
  );
}
