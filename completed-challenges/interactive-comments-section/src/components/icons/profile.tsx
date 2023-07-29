import * as React from "react";
import { SVGProps } from "react";

const Profile = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM5.25 9a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15.75a9.75 9.75 0 0 0-8.444 4.875.75.75 0 0 1-1.3-.75 11.25 11.25 0 0 1 19.487 0 .75.75 0 0 1-1.299.75A9.75 9.75 0 0 0 12 15.749Z"
    />
  </svg>
);

export default Profile;
