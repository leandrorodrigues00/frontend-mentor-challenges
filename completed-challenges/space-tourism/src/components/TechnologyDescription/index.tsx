import Image from "next/image";
import { TechContainer, TechDescriptionContainer } from "./styles";

interface TechnologyDescriptionProps {
  technology: {
    id: number;
    name: string;
    images: {
      portrait: string;
      landscape: string;
    };
    description: string;
  };
}

export function TechnologyDescription({
  technology,
}: TechnologyDescriptionProps) {
  return (
    <TechContainer>
      <TechDescriptionContainer>
        <span>The terminology...</span>
        <h1>{technology.name}</h1>
        <p>{technology.description}</p>
      </TechDescriptionContainer>

      <Image src={technology.images.portrait} alt="" width={515} height={527} />
    </TechContainer>
  );
}
