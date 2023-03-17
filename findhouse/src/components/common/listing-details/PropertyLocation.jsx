import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
// import 'react-leaflet-search/css/index.css';
import dynamic from 'next/dynamic';

const MapContainer = dynamic(() => import('react-leaflet').then((module) => module.MapContainer), {
  ssr: false,
}); 

const TileLayer = dynamic(() => import('react-leaflet').then((module) => module.TileLayer), {
  ssr: false,
});

const Marker = dynamic(() => import('react-leaflet').then((module) => module.Marker), {
  ssr: false,
});

const Popup = dynamic(() => import('react-leaflet').then((module) => module.Popup), {
  ssr: false,
});

const PropertyLocation = ({ location }) => {
  const mapRef = useRef(null);
  const [isMapReady, setIsMapReady] = useState(false);

  useEffect(() => {
    if (mapRef.current) {
      const L = require('leaflet');
      const map = L.map(mapRef.current);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
        maxZoom: 18,
      }).addTo(map);
      map.setView(location, 14);
      setIsMapReady(true);
      return () => {
        map.remove();
      }
    }
  }, [location]);

  if (!process.browser) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ height: '400px' }} ref={mapRef}>
      <MapContainer center={location} zoom={14} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {isMapReady && <Marker position={location}>
          <Popup>{location[0]}, {location[1]}</Popup>
        </Marker>}
      </MapContainer>
    </div>
  );
};

export default PropertyLocation;
// import { useEffect, useRef, useState } from 'react';
// import 'leaflet/dist/leaflet.css';
// import 'react-leaflet-markercluster/dist/styles.min.css';
// // import 'react-leaflet-search/css/index.css';
// import dynamic from 'next/dynamic';

// const MapContainer = dynamic(() => import('react-leaflet').then((module) => module.MapContainer), {
//   ssr: false,
// }); 

// const TileLayer = dynamic(() => import('react-leaflet').then((module) => module.TileLayer), {
//   ssr: false,
// });

// const Marker = dynamic(() => import('react-leaflet').then((module) => module.Marker), {
//   ssr: false,
// });

// const Popup = dynamic(() => import('react-leaflet').then((module) => module.Popup), {
//   ssr: false,
// });

// const PropertyLocation = ({ location }) => {
//   const mapRef = useRef(null);
//   const [isMapReady, setIsMapReady] = useState(false);

//   useEffect(() => {
//     if (mapRef.current) {
//       const L = require('leaflet');
//       const map = L.map(mapRef.current);
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; OpenStreetMap contributors',
//         maxZoom: 18,
//       }).addTo(map);
//       map.setView(location, 14);
//       setIsMapReady(true);
//     }
//   }, [location]);

//   if (!process.browser) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ height: '400px' }} ref={mapRef}>
//       <MapContainer center={location} zoom={14} scrollWheelZoom={true}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         {isMapReady && <Marker position={location}>
//           <Popup>{location[0]}, {location[1]}</Popup>
//         </Marker>}
//       </MapContainer>
//     </div>
//   );
// };

// export default PropertyLocation;

// import { useEffect, useRef, useState } from 'react';
// import mapboxgl from 'mapbox-gl';

// mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

// const PropertyLocation = ({ location }) => {
//   const mapContainerRef = useRef(null);
//   const [map, setMap] = useState(null);

//   useEffect(() => {
//     if (!map) {
//       const map = new mapboxgl.Map({
//         container: mapContainerRef.current,
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: location,
//         zoom: 14,
//       });
//       setMap(map);
//     }
//   }, [location, map]);

//   return (
//     <div className="thumb">
//       <div className="h400" id="map-canvas" ref={mapContainerRef} />
//       <div className="overlay_icon">
//         <a href="#">
//           <img
//             className="map_img_icon"
//             src="/assets/images/header-logo.png"
//             alt="header-logo.png"
//           />
//         </a>
//       </div>
//     </div>
//   );
// };

// export default PropertyLocation;

