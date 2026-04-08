import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <div className="relative z-[2] mx-auto w-full max-w-[980px] border-t border-dashed border-matrix/20 px-7 py-6 text-center text-xs text-matrix-dim">
      <div className="flex items-center justify-center gap-3">
        <span>&copy; 2026 eric_zhang &mdash; all_rights_reserved</span>
        <a
          href="https://github.com/Eric-Zhang-Developer"
          target="_blank"
          rel="noopener noreferrer"
          className="text-matrix-dim transition-colors hover:text-matrix hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]"
          aria-label="GitHub"
        >
          <Github size={16} />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-zhang-developer/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-matrix-dim transition-colors hover:text-matrix hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]"
          aria-label="LinkedIn"
        >
          <Linkedin size={16} />
        </a>
      </div>
    </div>
  );
}
