// Using an interface here because code modularity will allow for future expansions if needed.
import { techName } from "@/types/tech-name";
import Image from "next/image";

// Here I will use just an image for each tech box.
// The Extra name prop is for next's images fallback

type TechCardProps = {
  tech: techName;
};

export default function TechCard({ tech }: TechCardProps) {
  return (
    <div className="w-30 group relative flex rounded-xl border-4 border-secondary bg-gradient-to-br from-blue-900/40 to-slate-800/50 p-5 shadow-lg shadow-accent/20 transition hover:-translate-y-1 hover:border-accent">
      <Image
        className={tech.shouldAnimate ? "animate-spin-slow" : ""}
        src={tech.iconPath}
        alt={tech.name}
        width={100}
        height={100}
      ></Image>

      {/* Tooltip */}
      <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 transform rounded-md bg-black px-3 py-2 text-sm text-white opacity-0 shadow-lg shadow-accent/50 transition hover:shadow-xl group-hover:opacity-100">
        {tech.name}
      </span>
    </div>
  );
}
