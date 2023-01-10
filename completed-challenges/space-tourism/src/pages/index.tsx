import bgHome from "../assets/home/bg-home.jpg";
import bgTablet from "../assets/home/bg-home-tablet.jpg";
import bgMobile from "../assets/home/bg-home-mobile.jpg";

import { DetailsHomeContainer, HomeContainer } from "../styles/pages/home";

import { RippleButton } from "../components/RippleButton";
import { BgWrapper } from "../components/BgWrapper";
import Head from "next/head";

export default function Home() {
  const arrayImages = [bgHome, bgTablet, bgMobile];
  return (
    <>
      <Head>
        <title>Home | Space Tourism</title>
      </Head>
      <BgWrapper src={arrayImages}>
        <HomeContainer>
          <DetailsHomeContainer>
            <span>So, you want to travel to</span>
            <h1>SPACE</h1>
            <p>
              Let's face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we'll give you a truly out of
              this world experience!
            </p>
          </DetailsHomeContainer>

          <RippleButton />
        </HomeContainer>
      </BgWrapper>
    </>
  );
}
