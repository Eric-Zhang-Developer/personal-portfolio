import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="bottom-0 flex h-10 w-full items-center justify-center bg-slate-800 text-white">
      <p className="mr-4 text-sm">Copyright © 2025 Eric Zhang</p>
      <a
        href="https://github.com/Eric-Zhang-Developer"
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4 transform transition hover:scale-110 hover:text-accent"
      >
        <Github size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/eric-zhang-developer/"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition hover:scale-110 hover:text-accent"
      >
        <Linkedin size={20} />
      </a>
    </div>
  );
}
