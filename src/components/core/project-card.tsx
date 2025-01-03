// Decided to make a seperate project card component here as this code is being reused a lot
// Makes it very simple to add a new project

import {Project} from "@/types/project"
import Image from "next/image"

type ProjectCardProps = {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, imagePath, skills} = project;
  return (
    <main className="flex flex-col items-center border-2 p-2 border-slate-800 rounded-xl">
      <Image 
        src={imagePath}
        alt={title}
        width={100}
        height={100}
      ></Image>
      <h1 className="text-slate-800">{title}</h1>
      <p className="text-slate-700">{description}</p>
      <section>
        {skills.map((skill) =>
          (
            <p key={skill}>{skill}</p>
          )
        )}
      </section>
    </main>
  ) 
}