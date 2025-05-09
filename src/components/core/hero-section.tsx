import Link from "next/link";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-1">
      <h1 className="text-center text-6xl font-bold text-primary">
        Hello, I&apos;m <span className="text-accent">Eric Zhang</span>
      </h1>
      <p className="mb-8 text-center text-3xl text-secondary">
        Forging robust web applications with precision and purpose
      </p>

      <div className="mb-8">
        <Link
          href="/projects"
          className="transform rounded-lg border-2 border-primary px-8 py-4 text-xl text-primary shadow-md shadow-accent/30 transition hover:border-accent hover:text-accent hover:shadow-xl"
        >
          View Projects
        </Link>
      </div>

      <Image
        src="/avatar.png"
        alt="Eric Zhang"
        width={180}
        height={180}
        className="rounded-full border-2 border-primary shadow-md shadow-accent/30 transition hover:scale-105 hover:border-accent hover:shadow-lg"
      ></Image>
    </div>
  );
}
