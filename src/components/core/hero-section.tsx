import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mt-4">
      <h1 className="text-slate-800 text-4xl">Hi, I'm Eric Zhang</h1>
      <p className="text-slate-700 text-xl">
        Forging robust web applications with precision and purpose
      </p>

      <div>
        <Link
          href="/projects"
          className="transform bg-slate-800 text-white py-2 px-4 mr-4 rounded-lg shadow-md transition  hover:scale-110 hover:shadow-xl"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="transform border-2 text-slate-800 border-slate-800 py-2 px-4 rounded-lg shadow-md transition hover:scale-105 hover:shadow-xl"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
