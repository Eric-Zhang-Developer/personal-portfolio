import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div
      className="bottom-0 text-white bg-primary w-full h-10
    flex justify-center items-center"
    >
      <p className="text-sm mr-4">Copyright © 2025 Eric Zhang</p>
      <a
        href="https://github.com/Eric-Zhang-Developer"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-accent transform hover:scale-110 mr-4"
      >
        <Github size={20} />
      </a>
      <a
        href="https://www.linkedin.com/in/eric-zhang-developer/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-accent transform hover:scale-110"
      >
        <Linkedin size={20} />
      </a>
    </div>
  );
}
