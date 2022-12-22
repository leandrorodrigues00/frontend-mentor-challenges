import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

export const CarouselStyles = styled(Carousel)`
  .carousel .control-dots,
  .carousel .carousel-status {
    display: none;
  }

  .carousel .slide img {
    max-width: 500px;
    border-radius: 13px;
  }

  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 2px solid ${(props) => props.theme.Orange};
    border-radius: 13px;
  }

  .carousel .thumb img {
    width: 85px;
    height: 85px;
    aspect-ratio: 1;
  }

  button.control-arrow.control-next {
    position: absolute;
    left: auto;
    width: -1px;
    height: 50px;
    aspect-ratio: 1;
    border-radius: 100%;
    background: white;
    opacity: 1;
    top: 226px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .carousel.carousel-slider .control-arrow:hover {
    background: white;
  }

  button.control-arrow.control-prev {
    position: absolute;
    left: auto;
    width: -1px;
    height: 50px;
    aspect-ratio: 1;
    border-radius: 100%;
    background: white;
    opacity: 1;
    top: 226px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button.control-arrow.control-next.control-disabled,
  button.control-arrow.control-prev.control-disabled {
    display: none;
  }

  .carousel .control-next.control-arrow:before {
    border-left: 8px solid orange;
  }

  .carousel .control-prev.control-arrow:before {
    border-right: 8px solid orange;
  }

  .carousel.control-prev.control-arrow:hover {
    border-right: 8px solid red;
  }

  .carousel .thumbs {
    display: flex;
    gap: 30px;
    width: 100%;
    justify-content: center;
  }

  li.thumb {
    border: none;
    padding: 0;
    margin-top: 5px;
  }

  div.carousel.carousel-slider {
    width: 500px;
  }

  .carousel .slider-wrapper {
    width: 500px;
  }
`;
