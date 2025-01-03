import { Project } from "@/types/project";
import ProjectCard from "@/components/core/project-card";

// Decided to use a an array of projects as it centralizes and organizes my projects in 
// one spot vs all over the place in the tsx. This makes adding new projects much easier.

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description: "My Personal Portfolio",
    imagePath: "/project-icons/personal-portfolio.png",
    skills: ["React", "TypeScript", "Tailwind", "Next.js"],
  },
];

export default function Projects() {
  return (
    <main className="flex flex-col container mx-auto px-4 justify-center items-center">
      <h1 className="text-primary text-4xl mt-6">My Projects</h1>
      <section className="grid gap-2 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </main>
  );
}
