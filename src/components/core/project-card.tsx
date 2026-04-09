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
    <article className="terminal-window flex h-full flex-col transition-all hover:border-matrix/60 hover:shadow-[0_0_30px_rgba(0,255,65,0.12)]">
      {/* Title bar */}
      <div className="terminal-titlebar">
        <span className="terminal-dot bg-[#ff5f56]" />
        <span className="terminal-dot bg-[#ffbd2e]" />
        <span className="terminal-dot bg-[#27c93f]" />
        <span className="ml-2 text-matrix-text">{title.toLowerCase().replace(/\s+/g, "-")}.sh</span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Icon + Title */}
        <Link
          href={link}
          target={link.startsWith("/") ? undefined : "_blank"}
          rel={link.startsWith("/") ? undefined : "noopener noreferrer"}
          className="flex flex-col items-center gap-3 hover:text-matrix"
        >
          <div className="relative h-[72px] w-[72px] overflow-hidden rounded border border-matrix/20">
            <Image
              src={imagePath}
              alt={title}
              fill
              className="object-cover opacity-90 transition-opacity hover:opacity-100"
              sizes="72px"
            />
          </div>
          <h3 className="text-lg font-bold text-matrix">{title}</h3>
          <p className="text-center text-[13px] text-matrix-text/80">
            {description}
          </p>
        </Link>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="border border-dashed border-matrix/35 px-2 py-0.5 text-[11px] text-matrix"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Action links */}
        <div className="flex items-center justify-center gap-3 border-t border-dashed border-matrix/15 pt-3">
          {demoLink && (
            <Link
              href={demoLink}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-matrix/40 px-2.5 py-1 text-[12px] text-matrix transition-all hover:bg-matrix hover:text-black hover:shadow-[0_0_14px_rgba(0,255,65,0.4)]"
            >
              <ExternalLink size={12} />
              ./demo
            </Link>
          )}
          {githubLink && (
            <Link
              href={githubLink}
              prefetch={false}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 border border-matrix/40 px-2.5 py-1 text-[12px] text-matrix transition-all hover:bg-matrix hover:text-black hover:shadow-[0_0_14px_rgba(0,255,65,0.4)]"
            >
              <Github size={12} />
              git clone
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
