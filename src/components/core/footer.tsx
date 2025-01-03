import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="fixed bottom-0 bg-slate-800 w-full h-10 border-t border-black flex justify-center items-center">
      <p className="text-white text-sm mr-4">Copyright © 2025 Eric Zhang</p>
      <a
        href="https://github.com/Eric-Zhang-Developer"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github size={20} color="white" className="mr-4"/>
      </a>
      <a
        href="https://www.linkedin.com/in/eric-zhang-developer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={20} color="white"/>
      </a>
    </div>
  );
}
