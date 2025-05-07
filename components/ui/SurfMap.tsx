'use client';

import { useEffect, useState } from 'react';
import Map, { Marker } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function SurfMap() {
  const [location, setLocation] = useState<[number, number]>([108.25, 10.953]); // Mui Ne по умолчанию

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation([pos.coords.longitude, pos.coords.latitude]);
      });
    }
  }, []);

  return (
    <div className="w-full h-full border-2 border-red-600 rounded-xl">
      <Map
        initialViewState={{
          longitude: location[0],
          latitude: location[1],
          zoom: 13,
        }}
        style={{
          width: '100%',
          height: '100%',
          border: '1px solid lime',
          padding: '10px',
          minWidth: '200px',
          minHeight: '300px',
          borderRadius: '10px',
        }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        // attributionControl={true}
      >
        <Marker longitude={location[0]} latitude={location[1]} />
      </Map>
    </div>
  );
}
