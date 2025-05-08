'use client';

import { useState, useRef, useEffect } from 'react';
import Map, { Marker, MapRef } from 'react-map-gl/maplibre';
import 'maplibre-gl/dist/maplibre-gl.css';

type MapProps = {
  fullScreen?: boolean;
};

export default function SurfMap(props: MapProps) {
  const mapRef = useRef<MapRef | null>(null);
  const [location] = useState<[number, number]>([108.25, 10.95]);
  const [mapHeight, setMapHeight] = useState('300px');

  useEffect(() => {
    if (props.fullScreen) {
      const updateMapHeight = () => {
        setMapHeight(`${window.innerHeight}px`);
      };

      updateMapHeight(); // Set initial height
      window.addEventListener('resize', updateMapHeight);

      return () => {
        window.removeEventListener('resize', updateMapHeight);
      };
    }
  }, []);

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

      if (!props.fullScreen) {
        const canvas = mapRef.current.getCanvas();
        canvas.style.cursor = 'pointer';
      }
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
          height: mapHeight,
          minWidth: '300px',
          minHeight: '300px',
          borderRadius: props.fullScreen ? '0' : '10px',
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
