"use client";

import React from "react";
import L from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import { mapCoordinatesProps } from "@/app/page";

import "leaflet/dist/leaflet.css";
const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

const Map = ({ mapCoordinates }: { mapCoordinates: mapCoordinatesProps }) => (
  <MapContainer
    center={[mapCoordinates.latitude, mapCoordinates.longitude]}
    zoom={50}
    scrollWheelZoom={false}
    className="z-0"
    style={{ minHeight: "calc(100vh - 280px)" }}
  >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker
      position={[mapCoordinates.latitude, mapCoordinates.longitude]}
      icon={icon}
    >
      <Popup>Your ip address</Popup>
    </Marker>
  </MapContainer>
);

export default Map;
