import bgHome from "../assets/technology/bg-technology.jpg";
import bgTablet from "../assets/technology/bg-technology-tablet.jpg";
import bgMobile from "../assets/technology/bg-technology-mobile.jpg";

import { BgWrapper } from "../components/BgWrapper";
import {
  TechDescriptionContainer,
  TechnologyContainer,
} from "../styles/pages/technology";
import { TechnologyDescription } from "../components/TechnologyDescription";

import { technology } from "../data/technology";
import { useState } from "react";
import Head from "next/head";

export default function Technology() {
  const arrayImages = [bgHome, bgTablet, bgMobile];

  const [techList, setTechList] = useState(0);

  return (
    <>
      <Head>
        <title>Technology | Space Tourism</title>
      </Head>
      <BgWrapper src={arrayImages}>
        <TechnologyContainer>
          <h1>
            <strong>03</strong> SPACE LAUNCH 101
          </h1>

          <TechDescriptionContainer>
            <ul>
              <li className={techList == 0 ? "active" : ""}>
                <button onClick={() => setTechList(0)}>1</button>
              </li>
              <li className={techList == 1 ? "active" : ""}>
                <button onClick={() => setTechList(1)}>2</button>
              </li>
              <li className={techList == 2 ? "active" : ""}>
                <button onClick={() => setTechList(2)}>3</button>
              </li>
            </ul>

            <TechnologyDescription technology={technology[techList]} />
          </TechDescriptionContainer>
        </TechnologyContainer>
      </BgWrapper>
    </>
  );
}
