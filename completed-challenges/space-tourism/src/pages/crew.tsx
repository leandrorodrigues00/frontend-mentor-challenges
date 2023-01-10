import bgHome from "../assets/crew/bg-crew.jpg";
import bgTablet from "../assets/crew/bg-crew-tablet.jpg";
import bgMobile from "../assets/crew/bg-crew-mobile.jpg";

import { BgWrapper } from "../components/BgWrapper";
import {
  CrewContainer,
  CrewDetailsContainer,
  CrewMember,
  RadioIndicator,
  RadioRoot,
} from "../styles/pages/crew";
import { CrewMembers } from "../components/CrewMembers";
import { crew } from "../data/crew";
import { useState } from "react";
import Head from "next/head";

export default function Crew() {
  const arrayImages = [bgHome, bgTablet, bgMobile];
  const [crewMembersIndex, setCrewMembersIndex] = useState(1);

  function handleCrewMemberChange(value: string) {
    setCrewMembersIndex(Number(value));
  }

  return (
    <>
      <Head>
        <title>Crew | Space Tourism</title>
      </Head>
      <BgWrapper src={arrayImages}>
        <CrewContainer>
          <CrewDetailsContainer>
            <h1>
              <strong>02</strong> Meet your crew
            </h1>

            <CrewMembers
              key={crew[crewMembersIndex].id}
              crew={crew[crewMembersIndex]}
            />

            <RadioRoot
              defaultValue="1"
              onValueChange={(value) => handleCrewMemberChange(value)}
            >
              <CrewMember value="0" id="r1" title="Commander">
                <RadioIndicator />
              </CrewMember>

              <CrewMember value="1" id="r2" title="Specialist">
                <RadioIndicator />
              </CrewMember>

              <CrewMember value="2" id="r3" title="Pilot">
                <RadioIndicator />
              </CrewMember>

              <CrewMember value="3" id="r4" title="Engineer">
                <RadioIndicator />
              </CrewMember>
            </RadioRoot>
          </CrewDetailsContainer>
        </CrewContainer>
      </BgWrapper>
    </>
  );
}
