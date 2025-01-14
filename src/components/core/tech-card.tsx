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
    <div className="flex border-2 border-primary w-24">
      <Image src={tech.iconPath} alt={tech.name} width={100} height={100}></Image>
    </div>
  );
}
