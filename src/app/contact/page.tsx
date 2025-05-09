import ContactForm from "@/components/core/contact-form";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section className="flex flex-col items-center gap-6 text-primary">
      <div className="mt-6 flex items-center gap-4">
        <p className="text-4xl font-medium">Contact Me</p>
        <Mail size={35}></Mail>
      </div>

      <ContactForm></ContactForm>
      <section className="flex flex-row">
        <a
          href="https://github.com/Eric-Zhang-Developer"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-6 transform transition hover:scale-110 hover:text-accent"
        >
          <Github size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/eric-zhang-developer/"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition hover:scale-110 hover:text-accent"
        >
          <Linkedin size={40} />
        </a>
      </section>
    </section>
  );
}
