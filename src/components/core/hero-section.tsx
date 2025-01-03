import Link from "next/link";
import Image from "next/image";
export default function HeroSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-6">
      <h1 className="text-primary text-5xl font-bold">Hi, I'm Eric Zhang</h1>
      <p className="text-secondary text-2xl">
        Forging robust web applications with precision and purpose
      </p>

      <div>
        <Link
          href="/projects"
          className="transform bg-primary text-white text-xl 
          py-2 px-4 mr-4 rounded-lg shadow-md transition hover:shadow-xl hover:bg-accent"
        >
          View Projects
        </Link>
        <Link
          href="/contact"
          className="transform border-2 text-primary border-primary text-xl py-2 px-4 
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
