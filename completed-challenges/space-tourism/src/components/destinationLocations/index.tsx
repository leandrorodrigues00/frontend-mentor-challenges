import Image from "next/image";
import { DestinationDetails, DestinationLocationsContainer } from "./styles";
import moon from "../../assets/destination/image-moon.png";

interface DestinationLocationsProps {
  destinationItem: {
    id: number;
    name: string;
    images: { png: string; webp: string };
    description: string;
    distance: string;
    travel: string;
  };
}

export function DestinationLocations({
  destinationItem,
}: DestinationLocationsProps) {
  return (
    <DestinationLocationsContainer>
      <div>
        <Image
          src={destinationItem.images.png}
          alt=""
          width={500}
          height={500}
        />
      </div>

      <DestinationDetails>
        <h1>{destinationItem.name}</h1>

        <p>{destinationItem.description}</p>

        <div>
          <div>
            <span>AVG. DISTANCE</span>
            <p>{destinationItem.distance}</p>
          </div>

          <div>
            <span>Est. travel time</span>
            <p>{destinationItem.travel}</p>
          </div>
        </div>
      </DestinationDetails>
    </DestinationLocationsContainer>
  );
}
