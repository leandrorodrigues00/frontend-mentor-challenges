import {
  CrewImageContainer,
  CrewMembersContainer,
  CrewMembersDetail,
} from "./styles";

import Image from "next/image";

interface CrewMembersProps {
  crew: {
    id: number;
    name: string;
    images: {
      png: string;
      webp: string;
    };
    role: string;
    bio: string;
  };
}

export function CrewMembers({ crew }: CrewMembersProps) {
  return (
    <CrewMembersContainer>
      <CrewMembersDetail>
        <strong>{crew.role}</strong>

        <h1>{crew.name}</h1>

        <p>{crew.bio}</p>
      </CrewMembersDetail>

      <CrewImageContainer>
        <Image src={crew.images.png} alt="" height="646" width="430" />
      </CrewImageContainer>
    </CrewMembersContainer>
  );
}
