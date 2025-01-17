// Decidied to have a longer about page and not two seperate pages
// Reason being that its cool to have a scroll.

import { techName } from "@/types/tech-name";
import TechCard from "@/components/core/tech-card";

// Using lucide icon cause I love icons!
import { MoveDown } from "lucide-react";
const techs: techName[] = [
  {
    name: "Typescript",
    iconPath: "/technology-icons/typescript.jpg",
  },
  {
    name: "React.js",
    iconPath: "/technology-icons/react.png",
    shouldAnimate: true,
  },
  {
    name: "Tailwind",
    iconPath: "/technology-icons/tailwind.png",
  },
  {
    name: "Next.js",
    iconPath: "/technology-icons/next-js.jpeg",
  },
  {
    name: "Html",
    iconPath: "/technology-icons/html.png",
  },
  {
    name: "Css",
    iconPath: "/technology-icons/css.png",
  },
  {
    name: "Javascript",
    iconPath: "/technology-icons/javascript.png",
  },
  {
    name: "Python",
    iconPath: "/technology-icons/python.webp",
  },
  {
    name: "C++",
    iconPath: "/technology-icons/C++.webp",
  },
];

export default function About() {
  return (
    <>
      {/* Intro to about me page */}
      <section className="flex flex-col container mx-auto items-center text-primary min-h-screen">
        <h1 className="text-4xl mt-6">About Me</h1>
        <p className="mt-2 text-secondary text-xl text-center p-4 lg:p-2">
          Hi, I am a computer Science student at the University of Florida. I
          view programming not as a just another class to pass but as a versatile toolbox to solve
          problems. Currently deep-diving into front end development. 
        </p>
        <div className="flex items-center justify-center flex-col mt-6">
          <span className="text-accent mb-6">Scroll</span>
          <MoveDown className="text-accent animate-bounce" size={40}></MoveDown>
          <div
            className="h-10 w-px bg-gradient-to-b from-accent
          to-transparent animate-bounce mt-2"
          ></div>
        </div>
      </section>

      {/* More about me and tech stack */}
      {/* Decided to use a side by side layout for desktop with 2/3, 
      1/3 ratio then stack about me and tech layout on top of each other on mobile, both are clean*/}
      <section className="flex flex-col lg:flex-row container mx-auto gap-8 p-4">
        <div className="flex flex-col lg:w-2/3 gap-6">
          <h2 className="text-3xl font-medium text-center lg:text-start text-primary">
            More About Me
          </h2>
          <p className="text-secondary text-xl text-center lg:text-start indent-6">
            I approach software development like a blacksmith approaches their
            craft. When I&apos;m building applications, I see myself like a
            blacksmith forging steel into a blade, but instead of hammer blows
            and hot steel it&apos;s lines of code and functions. Just as a
            blacksmith begins with a vision of the finished blade, I start with
            a project concept that excites me. Those first lines of code are
            like initial hammer strikes on hot steel - transforming raw
            potential into reality. Then like how each hammer blow shapes the
            sword, each line of code I write gradually transforms my project.
            And just as a blacksmith expects and works through imperfections,
            bugs and challenges are inevitable. Sometimes, the blade may even
            shatter. Once I rewrote and refactored an entire project from
            scratch. I had to pick up the pieces and start over again. It was
            devastating, a dozen hours down the drain. But I persevered, never
            gave up, and completed it. Each problem solved only further sharpens
            my skills and leads to a more polished final product. Once I am
            finished, there&apos;s this unmatched satisfaction of seeing my
            vision fully realized. This is the work that I am proud to call my
            own.
          </p>
          <p className="text-secondary text-xl text-center lg:text-start indent-6">
            Paragraph about my journey
          </p>
          <p className="text-secondary text-xl text-center lg:text-start indent-6">
            Paragraph about why I chose front end for now
          </p>
        </div>
        <div className="flex flex-col lg:w-1/3 items-center">
          <h2 className="text-3xl font-medium mb-6 text-primary">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-8">
            {techs.map((tech) => (
              <TechCard key={tech.name} tech={tech}></TechCard>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
