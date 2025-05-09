import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Home */}
          <Link
            href="/"
            className="text-xl font-bold transition-colors hover:text-slate-300"
          >
            EZ
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link
              href="/about"
              className="transition-colors hover:text-slate-300"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="transition-colors hover:text-slate-300"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="transition-colors hover:text-slate-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
