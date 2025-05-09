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
  const { title, description, imagePath, skills, link, githubLink, demoLink } =
    project;
  return (
    <article className="flex h-full flex-col justify-center gap-2 rounded-2xl border-4 border-secondary bg-gradient-to-br from-blue-900/40 to-slate-800/50 p-4 pb-2 shadow-lg shadow-accent/30 transition hover:-translate-y-1 hover:border-accent hover:shadow-2xl">
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center gap-2 hover:cursor-pointer"
      >
        <Image src={imagePath} alt={title} width={100} height={100}></Image>
        <h1 className="text-3xl text-primary">{title}</h1>
        <p className="text-center text-lg text-secondary">{description}</p>
        <section className="flex flex-row flex-wrap justify-center">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-s m-1 inline-block rounded-full border-2 border-l-8 border-accent bg-slate-100 px-3 py-1 text-border"
            >
              {skill}
            </span>
          ))}
        </section>
      </Link>

      {/* Links to External Sites */}

      <div className="flex flex-row items-center justify-center gap-8 text-primary">
        {/* Deployed Site */}
        {demoLink && (
          <Link
            href={demoLink}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 transition hover:-translate-y-1 hover:rotate-3 hover:scale-110 hover:text-accent hover:shadow-sm"
          >
            <ExternalLink size={40}></ExternalLink>

            {/* Tooltip */}
            <span className="absolute left-1/2 top-3/4 mb-2 -translate-x-1/2 translate-y-2 transform whitespace-nowrap rounded-md bg-slate-900/90 px-3 py-2 text-center text-sm text-primary opacity-0 transition group-hover:opacity-100">
              Visit App
            </span>
          </Link>
        )}

        {/* Github */}
        {githubLink && (
          <Link
            href={githubLink}
            prefetch={false}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2 transition hover:-translate-y-1 hover:rotate-3 hover:scale-110 hover:text-accent hover:shadow-sm"
          >
            <Github size={40}></Github>

            {/* Tooltip */}
            <span className="absolute left-1/2 top-3/4 mb-2 -translate-x-1/2 translate-y-2 transform rounded-md bg-slate-900/90 px-3 py-2 text-center text-sm text-primary opacity-0 transition group-hover:opacity-100">
              Github
            </span>
          </Link>
        )}
      </div>
    </article>
  );
}
