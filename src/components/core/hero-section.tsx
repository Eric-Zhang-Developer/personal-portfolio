import Link from "next/link";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-6 p-1">
      <h1 className="text-primary text-5xl font-bold text-center">Hello, I&apos;m <span className="text-accent">Eric Zhang</span></h1>
      <p className="text-secondary text-2xl text-center mb-8">
        Forging robust web applications with precision and purpose
      </p>

      <div className="mb-8">
        <Link
          href="/projects"
          className="transform bg-secondary text-white text-xl 
          py-3 px-5 mr-4 rounded-lg shadow-md transition hover:shadow-xl hover:bg-accent"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="transform border-2 text-primary border-primary text-xl py-3 px-5
          rounded-lg shadow-md transition hover:border-accent hover:text-accent hover:shadow-xl"
        >
          Contact Me
        </Link>
      </div>

      <Image
        src="/avatar.png"
        alt="Eric Zhang"
        width={180}
        height={180}
        className="rounded-full shadow-md border-2 border-primary transition hover:border-accent hover:shadow-lg hover:scale-105"
      ></Image>
    </div>
  );
}
