import { Project } from "@/types/project";
import ProjectCard from "@/components/core/project-card";

const projects: Project[] = [
  {
    title: "MealCraft",
    description:
      "AI-Powered Recipe Generator That Turns Fridge Photos Into Meals",
    imagePath: "/project-icons/mealcraft.png",
    link: "https://mealcraftai.vercel.app/",
    skills: [
      "React",
      "TypeScript",
      "Tailwind",
      "Next.js",
      "Gemini",
      "Vitest",
      "Playwright",
    ],
    demoLink: "https://mealcraftai.vercel.app/",
    githubLink: "https://github.com/Eric-Zhang-Developer/mealcraft",
  },
  {
    title: "CodeQuest",
    description:
      "Gamified Fantasy-Themed App That Teaches Programming Through Quests",
    imagePath: "/project-icons/code-quest.png",
    link: "https://intro-swe-term-project.vercel.app/",
    skills: [
      "React",
      "TypeScript",
      "Tailwind",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "Vitest",
    ],
    demoLink: "https://intro-swe-term-project.vercel.app/",
    githubLink: "https://github.com/Eric-Zhang-Developer/code-quest",
  },
  {
    title: "Follow Diff",
    description:
      "Privacy-First Instagram Tool To See Who Doesn't Follow You Back",
    imagePath: "/project-icons/follow-diff.png",
    link: "https://followdiff.vercel.app/",
    skills: ["React", "TypeScript", "Tailwind", "Next.js", "Zod", "Jest"],
    demoLink: "https://followdiff.vercel.app/",
    githubLink: "https://github.com/Eric-Zhang-Developer/follow-diff",
  },
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
    githubLink: "https://github.com/Eric-Zhang-Developer/twitter-traverse",
  },
  {
    title: "Personal Portfolio",
    description: "My Personal Portfolio",
    imagePath: "/project-icons/personal-portfolio.png",
    link: "https://github.com/Eric-Zhang-Developer/personal-portfolio",
    skills: ["React", "TypeScript", "Tailwind", "Next.js"],
    githubLink: "https://github.com/Eric-Zhang-Developer/personal-portfolio",
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
    <div className="mx-auto max-w-[980px] px-4 py-10 md:px-7">
      {/* Section header */}
      <div className="mb-8">
        <h1 className="text-[15px] font-bold uppercase tracking-wider text-amber">
          <span className="text-matrix-dim">{"// "}</span>ls ~/projects/
        </h1>
        <p className="mt-2 text-[13px] text-matrix-dim">
          <span className="text-matrix">$</span> found {projects.length} entries
        </p>
      </div>

      {/* Project grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
