// Decidied to have a longer about page and not two seperate pages
// Reason being that its cool to have a scroll.

import { techName } from "@/types/tech-name";
import TechCard from "@/components/core/tech-card";
const techs: techName[] = [
  {
    name: "Typescript",
    iconPath: "/technology-icons/typescript.jpg",
  },
  {
    name: "React.js",
    iconPath: "/technology-icons/react.png",
    shouldAnimate: true
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident
        </p>
        <div className="flex items-center justify-center flex-col mt-6">
          <span className="text-accent">Scroll</span>
          <div
            className="h-32 w-px bg-gradient-to-b from-accent
          to-transparent animate-bounce mt-8"
          ></div>
        </div>
      </section>
      {/* More about me and tech stack */}
      <section className="flex flex-col lg:flex-row container mx-auto gap-8 p-4">
        <div className="flex flex-col lg:w-2/3">
          <h2 className="text-3xl font-medium text-center lg:text-start">More About Me</h2>
          <p className="text-secondary text-xl text-center lg:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident
          </p>
        </div>
        <div className="flex flex-col lg:w-1/3 items-center">
          <h2 className="text-2xl">Tech Stack</h2>
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
