import { Project } from "@/types/project";
import ProjectCard from "@/components/core/project-card";

// Decided to use a an array of projects as it centralizes and organizes my projects in
// one spot vs all over the place in the tsx. This makes adding new projects much easier.

const projects: Project[] = [
  {
    title: "WikiType",
    description: "Type articles, learn stuff, get faster",
    imagePath: "/project-icons/wiki-type.png",
    link: "https://wiki-type.vercel.app",
    skills: ["React", "TypeScript", "Tailwind", "Next.js", "Wikipedia API"],
    demoLink: "https://wiki-type.vercel.app",
    githubLink: "https://github.com/Eric-Zhang-Developer/wiki-type",
  },
  {
    title: "TwitterTraverse",
    description: "Twitter Network Path Explorer",
    imagePath: "/project-icons/twitter-traverse.png",
    link: "https://twitter-traverse.vercel.app",
    skills: [
      "React",
      "TypeScript",
      "Tailwind",
      "Next.js",
      "Python",
      "Flask",
      "Graph Algorithms",
    ],
    demoLink: "https://twitter-traverse.vercel.app",
    githubLink: "https://github.com/Eric-Zhang-Developer/DSA-Final-Project",
  },
  {
    title: "Personal Portfolio",
    description: "My Personal Portfolio",
    imagePath: "/project-icons/personal-portfolio.png",
    link: "https://github.com/Eric-Zhang-Developer/Personal-Portfolio",
    skills: ["React", "TypeScript", "Tailwind", "Next.js"],
    githubLink: "https://github.com/Eric-Zhang-Developer/Personal-Portfolio",
  },

  {
    title: "Tail Tales Gallery",
    description: "AI-generated Animal Artwork Gallery",
    imagePath: "/project-icons/tail-tale-gallery.jpg",
    link: "https://github.com/Eric-Zhang-Developer/Tail-Tale-Gallery",
    skills: ["React", "TypeScript", "Tailwind"],
    githubLink: "https://github.com/Eric-Zhang-Developer/Tail-Tale-Gallery",
  },

  {
    title: "To-Do App",
    description: "Simple To-Do List Built Using React",
    imagePath: "/project-icons/to-do-list.png",
    link: "https://eric-zhang-developer.github.io/To-Do-App/",
    skills: ["React", "Javascript", "CSS"],
    demoLink: "https://eric-zhang-developer.github.io/To-Do-App/",
    githubLink: "https://github.com/Eric-Zhang-Developer/To-Do-App",
  },

  {
    title: "Meme Calculator",
    description: "Calculator with a Unique Twist",
    imagePath: "/project-icons/meme-calculator.webp",
    link: "https://eric-zhang-developer.github.io/Web-Calculator",
    skills: ["HTML", "CSS", "Javscript"],
    demoLink: "https://eric-zhang-developer.github.io/Web-Calculator",
    githubLink: "https://github.com/Eric-Zhang-Developer/Web-Calculator",
  },

  {
    title: "Youtube Clone",
    description: "Pixel Perfect Copy of Youtube's UI",
    imagePath: "/project-icons/youtube-clone.png",
    link: "https://eric-zhang-developer.github.io/Youtube.com-Clone",
    skills: ["HTML", "CSS", "Javscript"],
    demoLink: "https://eric-zhang-developer.github.io/Youtube.com-Clone",
    githubLink: "https://github.com/Eric-Zhang-Developer/Youtube.com-Clone",
  },

  {
    title: "Minesweeper",
    description: "Enhanced Implementation of Classic Minesweeper",
    imagePath: "/project-icons/minesweeper.png",
    link: "/projects/minesweeper",
    skills: ["C++", "SFML", "STL"],
  },

  {
    title: "Pakudex",
    description: "Pokémon-inspired Species Tracker",
    imagePath: "/project-icons/pakudex.webp",
    link: "/projects/pakudex",
    skills: ["Python"],
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col container mx-auto px-4 justify-center items-center">
      <h1 className="text-primary text-4xl mt-6">My Projects</h1>
      <section className="grid gap-4 mt-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </section>
  );
}
