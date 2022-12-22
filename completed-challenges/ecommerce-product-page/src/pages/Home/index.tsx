import { HomeContainer } from "./styles";

import { PictureGallery } from "./components/PictureGallery";
import { DescriptionProducts } from "./components/DescriptionProducts";

export function Home() {
  return (
    <HomeContainer>
      <PictureGallery />
      <DescriptionProducts />
    </HomeContainer>
  );
}
