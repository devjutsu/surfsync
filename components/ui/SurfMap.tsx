'use client';

import { useEffect, useState, useRef } from 'react';
import Map, { Marker, MapRef } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

export default function SurfMap() {
  const mapRef = useRef<MapRef | null>(null);
  const [location, setLocation] = useState<[number, number]>([108.25, 10.953]);
  const [readyToFly, setReadyToFly] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((pos) => {
      const coords: [number, number] = [pos.coords.longitude, pos.coords.latitude];
      setLocation(coords);
      setReadyToFly(true); 
    });
  }, []);

  const handleMapLoad = () => {
    if (mapRef.current && readyToFly) {
      mapRef.current.flyTo({
        center: location,
        zoom: 10,
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
