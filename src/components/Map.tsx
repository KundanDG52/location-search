// import "leaflet/dist/leaflet.css";
// import type { Place } from "../api/Place";
// import type { Map as LeafletMap } from "leaflet";
// import { useEffect, useRef } from "react";
// import { MapContainer, TileLayer, Marker } from "react-leaflet";

// interface MapProps {
//   place: Place | null;
// }

// export default function Map({ place }: MapProps) {
//   const mapRef = useRef<LeafletMap | null>(null);

//   useEffect(() => {
//     if (mapRef.current && place) {
//       mapRef.current.flyTo([place.latitude, place.longitude]);
//     }
//   }, [place]);
//   return (
//     <MapContainer
//       ref={mapRef}
//       center={[40.7, -74]}
//       zoom={12}
//       scrollWheelZoom
//       className="h-full"
//     >
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       {place && <Marker position={[place.latitude, place.longitude]} />}
//     </MapContainer>
//   );
// }

import "leaflet/dist/leaflet.css";
import "../utils/fixLeafletIcon";
import type { Place } from "../api/Place";
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

interface MapProps {
  place: Place | null;
}

function FlyToMarker({ place }: { place: Place }) {
  const map = useMap();

  useEffect(() => {
    if (place) {
      map.flyTo([place.latitude, place.longitude], 13);
    }
  }, [place, map]);

  return <Marker position={[place.latitude, place.longitude]} />;
}

export default function Map({ place }: MapProps) {
  return (
    <MapContainer
      center={[40.7, -74]}
      zoom={12}
      scrollWheelZoom
      className="h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {place && <FlyToMarker place={place} />}
    </MapContainer>
  );
}
