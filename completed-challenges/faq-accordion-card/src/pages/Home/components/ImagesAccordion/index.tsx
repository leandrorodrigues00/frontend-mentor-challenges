import { ImageAccordionContainer } from "./styles";

import accordionImg from "../../../../assets/illustration-woman-online-desktop.svg";
import accordionImgMobile from "../../../../assets/illustration-woman-online-mobile.svg";
import illustrationBox from "../../../../assets/illustration-box-desktop.svg";

export function ImagesAccordion() {
  return (
    <ImageAccordionContainer>
      <picture>
        <source media="(max-width: 930px)" srcSet={accordionImgMobile} />
        <source media="(min-width: 930px)" srcSet={accordionImg} />
        <img className="illustration" src={accordionImg} alt="hero" />
      </picture>

      <img src={illustrationBox} alt="box details" />
    </ImageAccordionContainer>
  );
}
