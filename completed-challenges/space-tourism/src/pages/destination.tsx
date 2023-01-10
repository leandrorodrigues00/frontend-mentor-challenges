import bgDestination from "../assets/destination/bg-destination.jpg";
import bgTablet from "../assets/destination/bg-destination-tablet.jpg";
import bgMobile from "../assets/destination/bg-destination-mobile.jpg";

import { BgWrapper } from "../components/BgWrapper";
import {
  DestinationContainer,
  DetailsDestinationContainer,
} from "../styles/pages/destination";
import { DestinationLocations } from "../components/destinationLocations";

import { destination } from "../data/destinations";
import { useState } from "react";
import Head from "next/head";

export default function Destination() {
  const arrayBgImages = [bgDestination, bgTablet, bgMobile];

  const [planetsList, setPlanetsList] = useState(0);

  return (
    <>
      <Head>
        <title>Destination | Space Tourism</title>
      </Head>
      <BgWrapper src={arrayBgImages}>
        <DestinationContainer>
          <DetailsDestinationContainer>
            <h1>
              <strong>01</strong> Pick your destination
            </h1>

            <ul>
              <li className={planetsList == 0 ? "active" : ""}>
                <button onClick={() => setPlanetsList(0)}>Moon</button>
              </li>
              <li className={planetsList == 1 ? "active" : ""}>
                <button onClick={() => setPlanetsList(1)}>Mars</button>
              </li>
              <li className={planetsList == 2 ? "active" : ""}>
                <button onClick={() => setPlanetsList(2)}>Europa</button>
              </li>
              <li className={planetsList == 3 ? "active" : ""}>
                <button onClick={() => setPlanetsList(3)}>Titan</button>
              </li>
            </ul>

            <DestinationLocations
              key={destination[planetsList].id}
              destinationItem={destination[planetsList]}
            />
          </DetailsDestinationContainer>
        </DestinationContainer>
      </BgWrapper>
    </>
  );
}
