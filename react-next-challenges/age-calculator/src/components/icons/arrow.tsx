import { SVGProps } from "react";

const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={46} height={44} {...props}>
    <path
      d="M1 22.019C8.333 21.686 23 25.616 23 44m0 0V0m22 22.019C37.667 21.686 23 25.616 23 44"
      fill="none"
      stroke="#FFF"
      strokeWidth={2}
    />
  </svg>
);

export default ArrowIcon;
