import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import { useEffect, useRef } from 'react';

mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN';

export default function InteractiveMap({ lng, lat }) {
  const mapContainer = useRef(null);
  useEffect(() => {
    new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: 9
    });
  }, [lng, lat]);
  return <div ref={mapContainer} style={{ height: 400, borderRadius: 12 }} />;
}
