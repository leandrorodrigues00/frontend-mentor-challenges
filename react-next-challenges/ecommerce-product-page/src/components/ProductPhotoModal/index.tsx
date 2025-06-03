import * as Dialog from "@radix-ui/react-dialog";

import {
  CloseButton,
  Content,
  Overlay,
  ProductImagemContainer,
} from "./styles";

import { X } from "phosphor-react";
import Carousel from "../Carousel";

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
