import ContactForm from "@/components/core/contact-form";
import { Github, Linkedin } from "lucide-react";

export default function Email() {
  return (
    <div className="mx-auto max-w-[680px] px-4 py-10 md:px-7">
      {/* Terminal window */}
      <section className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot bg-[#ff5f56]" />
          <span className="terminal-dot bg-[#ffbd2e]" />
          <span className="terminal-dot bg-[#27c93f]" />
          <span className="ml-2 text-matrix-text">~/contact/mail.sh</span>
          <span className="ml-auto text-[11px] text-matrix-dim">
            bash &middot; formspree
          </span>
        </div>

        <ContactForm />
      </section>

      {/* Social links */}
      <div className="mt-8 space-y-2 text-[13px]">
        <div className="flex items-center gap-2 text-matrix-dim">
          <span className="text-matrix">$</span> echo{" "}
          <a
            href="https://github.com/Eric-Zhang-Developer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-matrix transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]"
          >
            <Github size={14} />
            $GITHUB
          </a>
        </div>
        <div className="flex items-center gap-2 text-matrix-dim">
          <span className="text-matrix">$</span> echo{" "}
          <a
            href="https://www.linkedin.com/in/eric-zhang-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-matrix transition-all hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,255,65,0.5)]"
          >
            <Linkedin size={14} />
            $LINKEDIN
          </a>
        </div>
      </div>
    </div>
  );
}
