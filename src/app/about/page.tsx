const skills = [
  "TypeScript",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "JavaScript",
  "HTML/CSS",
  "Python",
  "C++",
  "Node.js",
];

export default function About() {
  return (
    <div className="mx-auto max-w-[980px] space-y-16 px-4 py-10 md:px-7">
      {/* ── README.md ── */}
      <section className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot bg-[#ff5f56]" />
          <span className="terminal-dot bg-[#ffbd2e]" />
          <span className="terminal-dot bg-[#27c93f]" />
          <span className="ml-2 text-matrix-text">~/about/README.md</span>
          <span className="ml-auto text-[11px] text-matrix-dim">
            markdown &middot; about
          </span>
        </div>
        <div className="space-y-4 p-6 md:p-7">
          <h2 className="text-[15px] font-bold uppercase tracking-wider text-amber">
            <span className="text-matrix-dim">{"// "}</span>cat README.md
          </h2>
          <p className="max-w-[72ch] text-matrix-text">
            I pursue excellence with unwavering consistency. My GitHub
            contribution graph tells the story: pushing commits on Christmas,
            programming on weekends, constantly building and learning. This same
            discipline extends beyond code. My philosophy of life long learning
            shapes everything I do. Currently focused on{" "}
            <span className="font-semibold text-matrix">
              front-end development
            </span>
            , where each project I forge transforms vision into reality.
          </p>
        </div>
      </section>

      {/* ── philosophy.md ── */}
      <section className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot bg-[#ff5f56]" />
          <span className="terminal-dot bg-[#ffbd2e]" />
          <span className="terminal-dot bg-[#27c93f]" />
          <span className="ml-2 text-matrix-text">~/about/philosophy.md</span>
          <span className="ml-auto text-[11px] text-matrix-dim">
            markdown &middot; long read
          </span>
        </div>
        <div className="space-y-6 p-6 md:p-7">
          <h2 className="text-[15px] font-bold uppercase tracking-wider text-amber">
            <span className="text-matrix-dim">{"// "}</span>My Philosophy to
            Software Development
          </h2>
          <p className="max-w-[72ch] indent-6 text-matrix-text">
            I approach software development like a blacksmith approaches their
            craft. When I&apos;m building applications, I see myself like a
            blacksmith forging steel into a blade, but instead of hammer blows
            and hot steel it&apos;s lines of code and functions. Just as a
            blacksmith begins with a vision of the finished blade, I start with
            a project concept that excites me. Those first lines of code are like
            initial hammer strikes on hot steel — transforming raw potential into
            reality. Then like how each hammer blow shapes the sword, each line
            of code I write gradually transforms my project. And just as a
            blacksmith expects and works through imperfections, bugs and
            challenges are inevitable. Sometimes, the blade may even shatter.
            Once I rewrote and refactored an entire project from scratch. I had
            to pick up the pieces and start over again. It was devastating, a
            dozen hours down the drain. But I persevered, never gave up, and
            completed it. Each problem solved only further sharpens my skills and
            leads to a more polished final product. Once I am finished,
            there&apos;s this unmatched satisfaction of seeing my vision fully
            realized. This is the work that I am proud to call my own.
          </p>

          <h2 className="text-[15px] font-bold uppercase tracking-wider text-amber">
            <span className="text-matrix-dim">{"// "}</span>My Programming Journey
          </h2>
          <p className="max-w-[72ch] indent-6 text-matrix-text">
            When I started college, I only chose CS because it seemed like the
            safe path — good money, stable career, happy parents. Sound familiar
            huh? It was just like those childhood piano lessons where I&apos;d
            only practice 1 hour before lessons just to get by. Competitive
            programming and leetcode were just checkboxes to land internships and
            get money. But something unexpected happened. Just like I randomly
            picked up piano again during a boring summer and lost myself learning
            River Flows in You, coding clicked when I built this calculator that
            played meme sounds. No tutorials or requirements, just messing
            around. That&apos;s when I realized that programming wasn&apos;t
            about the paycheck — it was about creating whatever I wanted. Take
            this portfolio for instance. I thought I&apos;d just throw some
            pre-built components together, ship it, and call it a day. Ten hours
            tops. Welp, I spent a month straight working on it every single day
            because it isn&apos;t just a project anymore, it&apos;s an extension
            of who I am. Funny how things change when you find your own reasons
            to code.
          </p>
        </div>
      </section>

      {/* ── skills directory listing ── */}
      <section className="terminal-window">
        <div className="terminal-titlebar">
          <span className="terminal-dot bg-[#ff5f56]" />
          <span className="terminal-dot bg-[#ffbd2e]" />
          <span className="terminal-dot bg-[#27c93f]" />
          <span className="ml-2 text-matrix-text">~/about/skills/</span>
          <span className="ml-auto text-[11px] text-matrix-dim">
            {skills.length} items
          </span>
        </div>
        <div className="p-6 md:p-7">
          <h2 className="mb-4 text-[15px] font-bold uppercase tracking-wider text-amber">
            <span className="text-matrix-dim">{"// "}</span>ls ~/.skills/
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-dashed border-matrix/40 px-3 py-1.5 text-[13px] text-matrix transition-all hover:border-solid hover:bg-matrix/10 hover:shadow-[0_0_12px_rgba(0,255,65,0.15)]"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="mt-6 text-[13px] text-matrix-dim">
            <span className="text-matrix">$</span> echo &quot;always learning, always building.&quot;
          </div>
        </div>
      </section>
    </div>
  );
}
