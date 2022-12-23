import { FaqDescription } from "./components/FaqDescription";
import { ImagesAccordion } from "./components/ImagesAccordion";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <ImagesAccordion />
      <FaqDescription />
    </HomeContainer>
  );
}
