import { Project } from "@/types/project";
import ProjectCard from "@/components/core/project-card";

// Decided to use a an array of projects as it centralizes and organizes my projects in 
// one spot vs all over the place in the tsx. This makes adding new projects much easier.

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description: "My Personal Portfolio",
    imagePath: "/project-icons/personal-portfolio.png",
    link: "/projects/personal-portfolio",
    skills: ["React", "TypeScript", "Tailwind", "Next.js"]
  },

  {
    title: "Tail Tales Gallery",
    description: "AI-generated Animal Artwork Gallery Showcasing Diverse Artistic Styles",
    imagePath: "/project-icons/tail-tale-gallery.jpg",
    link: "https://github.com/Eric-Zhang-Developer/Tail-Tale-Gallery",
    skills: ["React", "TypeScript", "Tailwind"]
  },

  {
    title: "To-Do App",
    description: "Simple To-Do List Built Using React",
    imagePath: "/project-icons/to-do-list.png",
    link: "https://github.com/Eric-Zhang-Developer/To-Do-App",
    skills: ["React", "Javascript", "CSS"]
  },

  {
    title: "Meme Calculator",
    description: "Calculator with a Unique Twist",
    imagePath: "/project-icons/meme-calculator.webp",
    link: "https://github.com/Eric-Zhang-Developer/Web-Calculator",
    skills: ["HTML", "CSS", "Javscript"]
  },

  {
    title: "Youtube Clone",
    description: "Pixel Perfect Copy of Youtube's UI",
    imagePath: "/project-icons/youtube-clone.png",
    link: "https://github.com/Eric-Zhang-Developer/Youtube.com-Clone",
    skills: ["HTML", "CSS", "Javscript"]
  },

  {
    title: "Minesweeper",
    description: "Enhanced Implementation of Classic Minesweeper",
    imagePath: "/project-icons/minesweeper.png",
    link: "/projects/minesweeper",
    skills: ["C++", "SFML", "STL"]
  },

  {
    title: "Pakudex",
    description: "Pokémon-inspired Species Tracker",
    imagePath: "/project-icons/pakudex.webp",
    link: "/projects/pakudex",
    skills: ["Python"]
  },

];

export default function Projects() {
  return (
    <main className="flex flex-col container mx-auto px-4 justify-center items-center">
      <h1 className="text-primary text-4xl mt-6">My Projects</h1>
      <section className="grid gap-4 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </main>
  );
}
