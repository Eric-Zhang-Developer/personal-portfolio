import ContactForm from "@/components/core/contact-form";
import { Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <main className="flex flex-col items-center gap-6">
      <ContactForm></ContactForm>
      <section className="flex flex-row text-primary">
        <a
          href="https://github.com/Eric-Zhang-Developer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={40} className="mr-6"/>
        </a>
        <a
          href="https://www.linkedin.com/in/eric-zhang-developer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={40} />
        </a>
      </section>
    </main>

  );
}
