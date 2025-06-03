import * as Dialog from "@radix-ui/react-dialog";
import { CaretLeft, CaretRight } from "phosphor-react";
import { useState } from "react";
import { ProductPhotoModal } from "../../../../components/ProductPhotoModal";
import { ProductsPhotos } from "../../../../data/ProductsPhotos";
import {
  ArrowLeftStyles,
  ArrowRightStyles,
  DesktopPreviewImage,
  MobilePreviewImage,
  PictureGalleryContainer,
  Trigger,
} from "./styles";

export function PictureGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(0);

  const [mobileSize, setMobileSize] = useState(ProductsPhotos);
  const [mobileIndex, setMobileIndex] = useState(0);

  function handleChangeImagePreview(e: any) {
    const clickedImg = e?.target?.getAttribute("id");
    setActiveIndex(clickedImg);
    setIsActive(clickedImg);
  }

  function handleNextImagePreview() {
    let total = mobileSize.length - 1;

    if (mobileIndex === total) return;
    if (mobileIndex <= total) {
      setMobileIndex(mobileIndex + 1);
    }
  }

  function handlePrevImagePreview() {
    if (mobileIndex >= 1) {
      setMobileIndex((state) => state - 1);
    } else return;
  }

  return (
    <>
      <PictureGalleryContainer>
        <div>
          <ArrowLeftStyles onClick={handlePrevImagePreview}>
            <CaretLeft size={22} weight="bold" />
          </ArrowLeftStyles>
          <Dialog.Root>
            <MobilePreviewImage
              src={`./products/${mobileSize[mobileIndex].photo}`}
              alt={mobileSize[mobileIndex].alt}
            />
            <Trigger asChild>
              <DesktopPreviewImage
                src={`./products/${ProductsPhotos[activeIndex].photo}`}
                alt={ProductsPhotos[activeIndex].alt}
              />
            </Trigger>

            <ProductPhotoModal />
          </Dialog.Root>
          <ArrowRightStyles onClick={handleNextImagePreview}>
            <CaretRight size={22} weight="bold" />
          </ArrowRightStyles>
        </div>

        <ul>
          <li
            onClick={handleChangeImagePreview}
            className={isActive == 0 ? "active" : ""}
          >
            <img
              id="0"
              src={`./products/${ProductsPhotos[0].thumbnail}`}
              alt={ProductsPhotos[0].alt}
            />
          </li>

          <li
            onClick={handleChangeImagePreview}
            className={isActive == 1 ? "active" : ""}
          >
            <img
              id="1"
              src={`./products/${ProductsPhotos[1].thumbnail}`}
              alt={ProductsPhotos[1].alt}
            />
          </li>
          <li
            onClick={handleChangeImagePreview}
            className={isActive == 2 ? "active" : ""}
          >
            <img
              id="2"
              src={`./products/${ProductsPhotos[2].thumbnail}`}
              alt={ProductsPhotos[2].alt}
            />
          </li>
          <li
            onClick={handleChangeImagePreview}
            className={isActive == 3 ? "active" : ""}
          >
            <img
              id="3"
              src={`./products/${ProductsPhotos[3].thumbnail}`}
              alt={ProductsPhotos[3].alt}
            />
          </li>
        </ul>
      </PictureGalleryContainer>
    </>
  );
}
