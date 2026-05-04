"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

/* ── boot sequence lines ── */
const bootLines = [
  { text: "[  OK  ] booting ericzhang.dev kernel v2.0", cls: "text-matrix" },
  {
    text: "[ INFO ] loading skills... [React, TypeScript, Next.js, Tailwind]",
    cls: "text-matrix-dim",
  },
  { text: "[ ████████████████████████ ] 100%", cls: "text-matrix" },
  {
    text: "[ INFO ] initializing projects... 11 found",
    cls: "text-matrix-dim",
  },
  { text: "[  OK  ] compiling portfolio.v2 ... done", cls: "text-matrix" },
  { text: "[ WARN ] sleep not found — proceeding anyway", cls: "text-amber" },
  { text: "[  OK  ] READY.", cls: "text-matrix" },
];

/* ── ASCII art title ── */
const asciiBig = `
 ███████╗██████╗ ██╗ ██████╗
 ██╔════╝██╔══██╗██║██╔════╝
 █████╗  ██████╔╝██║██║
 ██╔══╝  ██╔══██╗██║██║
 ███████╗██║  ██║██║╚██████╗
 ╚══════╝╚═╝  ╚═╝╚═╝ ╚═════╝
 ███████╗██╗  ██╗ █████╗ ███╗   ██╗ ██████╗
 ╚══███╔╝██║  ██║██╔══██╗████╗  ██║██╔════╝
   ███╔╝ ███████║███████║██╔██╗ ██║██║  ███╗
  ███╔╝  ██╔══██║██╔══██║██║╚██╗██║██║   ██║
 ███████╗██║  ██║██║  ██║██║ ╚████║╚██████╔╝
 ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝`;

/* ── rotating prompt commands ── */
const prompts = [
  "cd ~/about",
  "ls ~/projects",
  "cat hire-me.md",
  "./resume.pdf",
];

/* ── command → route mapping ── */
const commands: { label: string; display: string; route: string }[] = [
  { label: "cd ~/about", display: "cd", route: "/about" },
  { label: "ls ~/projects", display: "ls", route: "/projects" },
  { label: "cat hire-me.md", display: "cat", route: "/hire-me" },
];

export default function HeroSection() {
  const router = useRouter();

  /* state */
  const [bootRendered, setBootRendered] = useState<
    { text: string; cls: string }[]
  >([]);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [promptVisible, setPromptVisible] = useState(false);
  const [typedPrompt, setTypedPrompt] = useState("");
  const [glitching, setGlitching] = useState(false);

  const asciiRef = useRef<HTMLPreElement>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion.current) {
      setBootRendered(bootLines);
      setTitleVisible(true);
      setSubtitleVisible(true);
      setPromptVisible(true);
      return;
    }

    runBoot();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* boot sequence typewriter */
  const runBoot = useCallback(async () => {
    for (let i = 0; i < bootLines.length; i++) {
      const line = bootLines[i];
      // type each line character by character
      for (let c = 0; c <= line.text.length; c++) {
        await wait(12 + Math.random() * 16);
        setBootRendered((prev) => {
          const copy = [...prev];
          copy[i] = { text: line.text.slice(0, c), cls: line.cls };
          return copy;
        });
      }
      await wait(80);
    }
    await wait(200);
    setTitleVisible(true);
    await wait(400);
    setSubtitleVisible(true);
    await wait(300);
    setPromptVisible(true);
  }, []);

  /* rotating prompt typewriter */
  useEffect(() => {
    if (!promptVisible || reducedMotion.current) {
      if (reducedMotion.current) setTypedPrompt(prompts[0]);
      return;
    }

    let cancelled = false;
    let idx = 0;

    async function cycle() {
      while (!cancelled) {
        const word = prompts[idx % prompts.length];
        // type forward
        for (let i = 0; i <= word.length; i++) {
          if (cancelled) return;
          setTypedPrompt(word.slice(0, i));
          await wait(45);
        }
        await wait(1400);
        // delete backward
        for (let i = word.length; i >= 0; i--) {
          if (cancelled) return;
          setTypedPrompt(word.slice(0, i));
          await wait(25);
        }
        await wait(300);
        idx++;
      }
    }

    cycle();
    return () => {
      cancelled = true;
    };
  }, [promptVisible]);

  /* periodic glitch */
  useEffect(() => {
    if (reducedMotion.current) return;

    const interval = setInterval(() => {
      setGlitching(true);
      setTimeout(() => setGlitching(false), 150);
    }, 5200);

    return () => clearInterval(interval);
  }, []);

  /* scramble text during glitch */
  const getAsciiText = () => {
    if (!glitching) return asciiBig;
    const chars = "01#@█▓▒░%&";
    return asciiBig
      .split("")
      .map((c) =>
        c !== " " && c !== "\n" && Math.random() < 0.06
          ? chars[Math.floor(Math.random() * chars.length)]
          : c,
      )
      .join("");
  };

  return (
    <section className="flex min-h-[calc(100vh-56px)] flex-col justify-center px-4 py-10 md:px-7">
      <div className="mx-auto w-full max-w-[760px]">
        {/* ── Boot sequence ── */}
        <div className="mb-8 min-h-[160px] text-sm" aria-live="polite">
          {bootRendered.map((line, i) => (
            <span key={i} className={`block whitespace-pre ${line.cls}`}>
              {line.text}
            </span>
          ))}
        </div>

        {/* ── ASCII title ── */}
        <div className="relative mb-6 text-center">
          {/* Desktop ASCII */}
          <pre
            ref={asciiRef}
            aria-hidden="true"
            className={`duration-600 inline-block text-left text-[clamp(5px,0.95vw,12px)] leading-[1.05] text-matrix transition-all ${
              glitching ? "animate-glitch" : ""
            } ${
              titleVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            } hidden md:inline-block`}
            style={{
              textShadow:
                "0 0 8px rgba(0,255,65,0.55), 0 0 22px rgba(0,255,65,0.25)",
              letterSpacing: 0,
            }}
          >
            {getAsciiText()}
          </pre>

          {/* Mobile fallback */}
          <h1
            className={`text-4xl font-extrabold leading-tight text-matrix transition-all duration-500 md:hidden ${
              titleVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            style={{ textShadow: "0 0 18px rgba(0,255,65,0.5)" }}
          >
            ERIC
            <br />
            ZHANG
          </h1>
        </div>

        {/* ── Subtitle ── */}
        <div
          className={`mb-10 text-center text-[15px] text-matrix-text transition-opacity duration-500 ${
            subtitleVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <span>
            &gt; forging robust web applications with precision and purpose
          </span>
          <span className="cursor" aria-hidden="true" />
        </div>

        {/* ── Terminal prompt box ── */}
        <div
          className={`terminal-window transition-all duration-500 ${
            promptVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-3 opacity-0"
          }`}
          role="region"
          aria-label="interactive terminal"
        >
          {/* Title bar */}
          <div className="terminal-titlebar">
            <span className="terminal-dot bg-[#ff5f56]" />
            <span className="terminal-dot bg-[#ffbd2e]" />
            <span className="terminal-dot bg-[#27c93f]" />
            <span className="ml-2.5 text-matrix-dim">user@portfolio:~</span>
          </div>

          {/* Body */}
          <div className="p-4">
            <div className="text-[13px] text-matrix-dim">
              <span className="font-bold text-matrix">user@portfolio</span>
              <span className="text-amber">:</span>
              <span className="text-amber">~</span>$ {typedPrompt}
              <span className="cursor" aria-hidden="true" />
            </div>

            {/* Command buttons */}
            <div className="mt-4 flex flex-wrap gap-2.5" role="list">
              {commands.map((cmd) => (
                <button
                  key={cmd.label}
                  onClick={() => router.push(cmd.route)}
                  className="border border-dashed border-matrix/45 bg-transparent px-3 py-2 font-mono text-[13px] text-matrix transition-all hover:border-solid hover:bg-matrix hover:text-black hover:shadow-[0_0_18px_rgba(0,255,65,0.5)]"
                >
                  {cmd.display}{" "}
                  <span className="text-amber">
                    {cmd.label.replace(cmd.display + " ", "")}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Hint ── */}
        <div className="mt-5 text-center text-[12px] tracking-widest text-matrix-dim">
          [ scroll to continue ]
        </div>
      </div>
    </section>
  );
}

function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
