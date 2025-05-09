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
      <section className="container mx-auto flex min-h-screen flex-col items-center text-primary">
        <h1 className="mt-6 text-4xl">About Me</h1>
        <p className="mt-2 p-4 text-center text-xl text-secondary lg:p-2">
          I pursue excellence with unwavering consistency. My GitHub
          contribution graph tells the story: pushing commits on Christmas,
          programming on weekends, constantly building and learning. This same
          discipline extends beyond code. My philosophy of life long learning
          shapes everything I do. Currently focused on front-end development,
          where each project I forge transforms vision into reality.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center">
          <span className="mb-6 text-accent">Scroll</span>
          <MoveDown className="animate-bounce text-accent" size={40}></MoveDown>
          <div className="mt-2 h-10 w-px animate-bounce bg-gradient-to-b from-accent to-transparent"></div>
        </div>
      </section>

      {/* More about me and tech stack */}
      {/* Decided to use a side by side layout for desktop with 2/3, 
      1/3 ratio then stack about me and tech layout on top of each other on mobile, both are clean*/}
      <section className="container mx-auto flex flex-col gap-8 p-4 lg:flex-row">
        <div className="flex flex-col gap-2 lg:w-2/3">
          <h2 className="mb-6 text-center text-3xl font-medium text-primary lg:text-start">
            More About Me
          </h2>
          <span className="text-center text-2xl text-primary lg:text-start">
            My Philosophy to{" "}
            <span className="text-accent">Software Development</span>
          </span>
          <p className="text-md mb-6 text-center indent-6 text-secondary lg:text-start lg:text-xl">
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
          <span className="text-center text-2xl text-primary lg:text-start">
            My Programming <span className="text-accent">Journey</span>
          </span>
          <p className="text-md mb-6 text-center indent-6 text-secondary lg:text-start lg:text-xl">
            When I started college, I only chose CS because it seemed like the
            safe path - good money, stable career, happy parents. Sound familiar
            huh? It was just like those childhood piano lessons where I&apos;d
            only practice 1 hour before lessons just to get by. Competitive
            programming and leetcode were just checkboxes to land internships
            and get money. But something unexpected happened. Just like I
            randomly picked up piano again during a boring summer and lost
            myself learning River Flows in You, coding clicked when I built this
            calculator that played meme sounds. No tutorials or requirements,
            just messing around. That&apos;s when I realized that programming
            wasn&apos;t about the paycheck - it was about creating whatever I
            wanted. Take this portfolio for instance. I thought I&apos;d just
            throw some pre-built components together, ship it, and call it a
            day. Ten hours tops. Welp, I spent a month straight working on it
            every single day because it isn&apos;t just a project anymore,
            it&apos;s an extension of who I am. Funny how things change when you
            find your own reasons to code.
          </p>
          {/*
          <span className="text-primary text-2xl text-center lg:text-start">
            Relentless Like <span className="text-accent">Water</span>
          </span>
          <p className="text-secondary text-xl text-center lg:text-start indent-6 mb-6"></p>
          
          <span className="text-primary text-2xl text-center lg:text-start">
            Debugging Through <span className="text-accent">Fire</span>, Coding
            Through <span className="text-accent">Flames</span>
          </span>
          <p className="text-secondary text-xl text-center lg:text-start indent-6 mb-6"></p>
          */}
        </div>
        <div className="flex flex-col items-center lg:w-1/3">
          <h2 className="mb-6 text-3xl font-medium text-primary">Tech Stack</h2>
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
