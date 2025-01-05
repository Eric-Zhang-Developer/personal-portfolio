import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Home */}
          <Link href="/" className="text-xl font-bold hover:text-slate-300 transition-colors">
            EZ
          </Link>

          {/* Navigation Links */}
          <div className="flex space-x-8">
            <Link href="/about" className="hover:text-slate-300 transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-slate-300 transition-colors">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
