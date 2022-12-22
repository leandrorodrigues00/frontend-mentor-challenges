import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const PictureGalleryContainer = styled.div`
  max-width: 27.8125rem;
  > div {
    position: relative;
    img {
      max-width: 27.8125rem;
      width: 100%;
      border-radius: 0.625rem;
      margin-bottom: 1.25rem;
      cursor: pointer;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;

    li {
      &:hover {
        opacity: 0.5;
        transition: all 0.1s;
        cursor: pointer;
      }

      &.active {
        border: 2px solid ${(props) => props.theme.Orange};
        border-radius: 13px;
      }

      @media (max-width: 900px) {
        display: none;
      }
    }

    img {
      max-width: 85px;
      border-radius: 10px;
    }
  }
`;

export const ArrowLeftStyles = styled.button`
  position: absolute;
  width: 45px;
  aspect-ratio: 1;
  border-radius: 100%;
  background: ${(props) => props.theme.White};
  border: none;
  top: 210px;
  margin-left: 20px;

  svg {
    &:hover {
      color: ${(props) => props.theme.Orange};
    }
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export const ArrowRightStyles = styled.button`
  position: absolute;
  width: 45px;
  aspect-ratio: 1;
  border-radius: 100%;
  background: ${(props) => props.theme.White};
  border: none;
  top: 210px;
  right: 20px;

  svg {
    &:hover {
      color: ${(props) => props.theme.Orange};
    }
  }

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Trigger = styled(Dialog.Trigger)`
  @media (max-width: 900px) {
    pointer-events: none;
  }
`;

export const MobilePreviewImage = styled.img`
  display: none;

  @media (max-width: 900px) {
    display: inherit;

    &:hover {
      cursor: inherit;
    }
  }

  @media (max-width: 590px) {
    width: inherit !important;
    border-radius: 0 !important;
  }
`;

export const DesktopPreviewImage = styled.img`
  @media (max-width: 900px) {
    display: none;
  }
`;
