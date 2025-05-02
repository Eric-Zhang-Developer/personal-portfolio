// Decided to make a seperate project card component here as this code is being reused a lot
// Makes it very simple to add a new project

import Link from "next/link";
import { Project } from "@/types/project";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, imagePath, skills, link } = project;
  return (
    <article
      className="border-4 p-4  hover:shadow-2xl h-full gap-2 flex flex-col pb-2
    border-secondary rounded-2xl transition hover:border-accent hover:-translate-y-1 shadow-lg shadow-accent/30
   bg-gradient-to-br from-blue-900/40 to-slate-800/50"
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 hover:cursor-pointer"
      >
        <Image src={imagePath} alt={title} width={100} height={100}></Image>
        <h1 className="text-primary text-3xl ">{title}</h1>
        <p className="text-secondary text-lg text-center">{description}</p>
        <section className="flex flex-row flex-wrap justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 text-s text-border bg-slate-100 rounded-full m-1 inline-block border-l-8 border-2 border-accent"
            >
              {skill}
            </span>
          ))}
        </section>
      </Link>

      <div className="flex flex-row items-center justify-center gap-8 text-primary">
        <Link
          href={"https://www.google.com/"}
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent hover:scale-110 hover:-translate-y-1 hover:shadow-sm hover:rotate-3 transition p-2"
        >
          <ExternalLink size={40}></ExternalLink>
        </Link>
        <Link
          href={"https://www.google.com/"}
          prefetch={false}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent hover:scale-110 hover:-translate-y-1 hover:shadow-sm hover:rotate-3 transition p-2"
        >
          <Github size={40}></Github>
        </Link>
      </div>
    </article>
  );
}
