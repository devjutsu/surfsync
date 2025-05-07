'use client';

import { useState, useRef } from 'react';
import Map, { Marker, MapRef } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function SurfMap() {
  const mapRef = useRef<MapRef | null>(null);
  const [location] = useState<[number, number]>([108.25, 10.95]);


  const handleMapLoad = () => {
    console.log('mapRef.current', mapRef.current);
    console.log('location', location);
    if (mapRef.current) {
      console.log('Flying to location:', location);
      mapRef.current.flyTo({
        
        center: location,
        zoom: 13,
        duration: 1000,
      });
    }
  };

  return (
    <div className="w-full h-full rounded-xl">
      <Map
        ref={(instance) => {
          if (instance) mapRef.current = instance;
        }}
        style={{
          width: '100%',
          height: '100%',
          minWidth: '200px',
          minHeight: '300px',
          borderRadius: '10px',
        }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
        attributionControl={false}
        onLoad={handleMapLoad}
      >
        <Marker longitude={location[0]} latitude={location[1]} />
      </Map>
    </div>
  );
}
