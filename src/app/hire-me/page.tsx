import BookingEmbed from "@/components/core/booking-embed";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function HireMe() {
  return (
    <div className="mx-auto max-w-[1240px] px-4 py-10 md:px-7">
      <section className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot bg-[#ff5f56]" />
          <span className="terminal-dot bg-[#ffbd2e]" />
          <span className="terminal-dot bg-[#27c93f]" />
          <span className="ml-2 text-matrix-text">~/hire-me/book-call.sh</span>
        </div>

        <div className="space-y-4 p-4 md:p-6">
          <div>
            <h1 className="text-xl font-bold text-matrix">
              Book a 15-minute intro call
            </h1>
            <p className="mt-2 text-[13px] text-matrix-dim">
              Talk shop, talk roles, or just say hi.
            </p>
          </div>

          <BookingEmbed />
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-4">
          <h2 className="text-[15px] font-bold uppercase tracking-wider text-amber">
            <span className="text-matrix-dim">{"// "}</span>other_channels
          </h2>
          <p className="mt-2 text-[13px] text-matrix-dim">
            Prefer async? Pick the lane that makes sense.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <a
            href="https://www.linkedin.com/in/eric-zhang-developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-40 flex-col justify-between border border-matrix/35 bg-black/30 p-5 transition-all hover:border-matrix hover:bg-matrix hover:text-black hover:shadow-[0_0_24px_rgba(0,255,65,0.28)]"
          >
            <div>
              <Linkedin
                size={22}
                className="mb-4 text-matrix transition-colors group-hover:text-black"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-matrix transition-colors group-hover:text-black">
                LinkedIn
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-matrix-dim transition-colors group-hover:text-black/75">
                Recruiting, referrals, and professional context.
              </p>
            </div>
            <span className="mt-5 text-[12px] font-bold uppercase tracking-wider text-amber transition-colors group-hover:text-black">
              open_linkedin
            </span>
          </a>

          <a
            href="https://github.com/Eric-Zhang-Developer"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex min-h-40 flex-col justify-between border border-matrix/35 bg-black/30 p-5 transition-all hover:border-matrix hover:bg-matrix hover:text-black hover:shadow-[0_0_24px_rgba(0,255,65,0.28)]"
          >
            <div>
              <Github
                size={22}
                className="mb-4 text-matrix transition-colors group-hover:text-black"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-matrix transition-colors group-hover:text-black">
                GitHub
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-matrix-dim transition-colors group-hover:text-black/75">
                Code, projects, and commit history.
              </p>
            </div>
            <span className="mt-5 text-[12px] font-bold uppercase tracking-wider text-amber transition-colors group-hover:text-black">
              open_github
            </span>
          </a>

          <Link
            href="/hire-me/email"
            className="group flex min-h-40 flex-col justify-between border border-matrix/35 bg-black/30 p-5 transition-all hover:border-matrix hover:bg-matrix hover:text-black hover:shadow-[0_0_24px_rgba(0,255,65,0.28)]"
          >
            <div>
              <Mail
                size={22}
                className="mb-4 text-matrix transition-colors group-hover:text-black"
                aria-hidden="true"
              />
              <h3 className="text-lg font-bold text-matrix transition-colors group-hover:text-black">
                Email
              </h3>
              <p className="mt-2 text-[13px] leading-6 text-matrix-dim transition-colors group-hover:text-black/75">
                Send a quick note through the fallback form.
              </p>
            </div>
            <span className="mt-5 text-[12px] font-bold uppercase tracking-wider text-amber transition-colors group-hover:text-black">
              send_message
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
