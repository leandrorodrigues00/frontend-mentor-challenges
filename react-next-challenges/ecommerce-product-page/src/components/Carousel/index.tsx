import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ProductsPhotos } from "../../data/ProductsPhotos";
import { CarouselStyles } from "./styles";

export default () => (
  <CarouselStyles>
    <div>
      <img
        src={`./products/${ProductsPhotos[0].photo}`}
        alt={ProductsPhotos[0].alt}
      />
    </div>
    <div>
      <img
        src={`./products/${ProductsPhotos[1].photo}`}
        alt={ProductsPhotos[1].alt}
      />
    </div>
    <div>
      <img
        src={`./products/${ProductsPhotos[2].photo}`}
        alt={ProductsPhotos[2].alt}
      />
    </div>
    <div>
      <img
        src={`./products/${ProductsPhotos[3].photo}`}
        alt={ProductsPhotos[3].alt}
      />
    </div>
  </CarouselStyles>
);
