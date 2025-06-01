import Image, { StaticImageData } from "next/image";
import React from "react";
import { BgWrapperContainer } from "./styles";

interface BgWrapper {
  children: React.ReactNode;
  src: Array<StaticImageData>;
}

export function BgWrapper({ children, src }: BgWrapper) {
  return (
    <BgWrapperContainer>
      <div>
        <Image src={src[0]} alt="" fill unoptimized />
      </div>
      {children}
    </BgWrapperContainer>
  );
}
