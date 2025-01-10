// Using an interface here because code modularity will allow for future expansions if needed.
import { techName } from "@/types/tech-name";

type TechCardProps = {
  tech: techName;
};


export default function TechCard({tech} : TechCardProps) {
  return (
    <div>
      <span>{tech.name}</span>
    </div>
  );
}