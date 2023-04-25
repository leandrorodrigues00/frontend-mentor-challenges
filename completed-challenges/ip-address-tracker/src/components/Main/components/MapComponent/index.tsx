import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

export { MapComponent };

// issue: https://github.com/PaulLeCam/react-leaflet/issues/956
// https://github.com/vercel/next.js/issues/34653
// https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr
