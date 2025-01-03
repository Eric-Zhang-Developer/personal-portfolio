// Decided to make a seperate project card component here as this code is being reused a lot
// Makes it very simple to add a new project

import {Project} from "@/types/project"

type ProjectCardProps = {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, imagePath, skills} = project;
  return (
    <main>
      <p>{title}</p>
  
    </main>
  ) 
}