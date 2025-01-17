// Decided to make a seperate project card component here as this code is being reused a lot
// Makes it very simple to add a new project

import Link from "next/link";
import { Project } from "@/types/project";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, imagePath, skills, link } = project;
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center border-4 p-4 hover:cursor-pointer
    gap-2 border-secondary rounded-2xl transition hover:border-accent hover:-translate-y-1 shadow-lg shadow-accent/20
    bg-gradient-to-br from-blue-900/40 to-slate-800/50"
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
  );
}
