"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavigationBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "/about", label: "~/about" },
    { href: "/projects", label: "~/projects" },
    { href: "/contact", label: "~/contact" },
  ];

  return (
    <nav
      className="fixed left-0 top-0 z-50 w-full border-b border-dashed border-matrix/20 bg-terminal-bg/90 backdrop-blur-sm"
      aria-label="primary"
    >
      <div className="mx-auto flex h-14 max-w-[1180px] items-center justify-between px-4 md:px-7">
        {/* Brand */}
        <Link
          href="/"
          className="text-sm font-extrabold tracking-widest text-matrix drop-shadow-[0_0_12px_rgba(0,255,65,0.5)] hover:text-matrix"
        >
          $ ERIC.ZHANG /
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[13px] transition-opacity hover:text-white hover:opacity-100 ${
                pathname === link.href
                  ? "text-matrix opacity-100"
                  : "text-matrix opacity-60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="border border-matrix px-3 py-1.5 text-[13px] text-matrix shadow-[inset_0_0_18px_rgba(0,255,65,0.08)] transition-all hover:bg-matrix hover:text-black hover:shadow-[0_0_24px_rgba(0,255,65,0.5)]"
          >
            ./hire_me
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-5 bg-matrix transition-transform ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-matrix transition-opacity ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 bg-matrix transition-transform ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-dashed border-matrix/20 bg-terminal-bg/95 px-4 pb-4 pt-2 backdrop-blur-sm md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 text-[13px] transition-opacity hover:opacity-100 ${
                pathname === link.href ? "text-matrix" : "text-matrix/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-block border border-matrix px-3 py-1.5 text-[13px] text-matrix transition-all hover:bg-matrix hover:text-black"
          >
            ./hire_me
          </Link>
        </div>
      )}
    </nav>
  );
}
