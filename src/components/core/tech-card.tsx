// Using an interface here because code modularity will allow for future expansions if needed.
import { techName } from "@/types/tech-name";

type TechCardProps = {
  tech: techName;
};


export default function techCard({tech} : TechCardProps) {
  return (
    <div>
      <span>{tech.name}</span>
    </div>
  );
}