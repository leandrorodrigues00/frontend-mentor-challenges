import * as Dialog from "@radix-ui/react-dialog";

import {
  CloseButton,
  Content,
  Overlay,
  ProductImagemContainer,
} from "./styles";

import { ProductsPhotos } from "../../data/ProductsPhotos";
import { X } from "phosphor-react";
import Carousel from "../Carousel";

const images = [
  {
    original: `./products/${ProductsPhotos[0].photo}`,
    thumbnail: `./products/${ProductsPhotos[0].thumbnail}`,
  },
  {
    original: `./products/${ProductsPhotos[1].photo}`,
    thumbnail: `./products/${ProductsPhotos[1].thumbnail}`,
  },
  {
    original: `./products/${ProductsPhotos[2].photo}`,
    thumbnail: `./products/${ProductsPhotos[2].thumbnail}`,
  },
  {
    original: `./products/${ProductsPhotos[3].photo}`,
    thumbnail: `./products/${ProductsPhotos[3].thumbnail}`,
  },
];

export function ProductPhotoModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <CloseButton>
          <X size={32} weight="bold" />
        </CloseButton>

        <ProductImagemContainer></ProductImagemContainer>
        <Carousel />
      </Content>
    </Dialog.Portal>
  );
}
