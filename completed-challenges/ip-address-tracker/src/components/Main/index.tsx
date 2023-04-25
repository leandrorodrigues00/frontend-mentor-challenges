"use client";

import { mapCoordinatesProps } from "@/app/page";
import { MapComponent } from "./components/MapComponent";

export function Main({
  mapCoordinates,
}: {
  mapCoordinates: mapCoordinatesProps;
}) {
  return <MapComponent mapCoordinates={mapCoordinates} />;
}
