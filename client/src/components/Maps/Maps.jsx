import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '../../../api';
import Links from './Links';

import { useState } from 'react';

const data = [
  {
    id: 1,
    name: 'Хигия',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    location: {
      lat: 42.6210227,
      lng: 25.3974127,
    },
    imageUrl:
      'https://www.apteki-kazanlak.com/storage/pharmacies/QvxKoZxq8EJH7mEslB1e.jpg',
  },
  {
    id: 2,
    name: 'Фарма 1 Казанлък',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    location: {
      lat: 42.6207892,
      lng: 25.3910188,
    },
    phone: '0431/6 34 95',
    imageUrl: 'https://www.apteki-kazanlak.com/storage/pharmacies/arnika.jpg',
  },
  {
    id: 3,
    name: 'Арника',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    location: {
      lat: 42.6185444,
      lng: 25.3930776,
    },
    imageUrl:
      'https://www.apteki-kazanlak.com/storage/pharmacies/7UcfHZ3Z3uBJWda2pX8d.jpeg',
  },
  {
    id: 4,
    name: 'Фармавист',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    location: {
      lat: 42.6241321,
      lng: 25.3990883,
    },
    imageUrl:
      'https://www.apteki-kazanlak.com/storage/pharmacies/farma-1-center.jpg',
  },
  {
    id: 5,
    name: 'Фарма 1 Павел Баня',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    location: {
      lat: 42.6228519,
      lng: 25.3864468,
    },
    imageUrl:
      'https://www.apteki-kazanlak.com/storage/pharmacies/pharma-1-pavel-banya.jpg',
  },
  {
    id: 6,
    name: 'Фарма 1 Център',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    location: {
      lat: 42.6199465,
      lng: 25.39431,
    },
    imageUrl:
      'https://www.apteki-kazanlak.com/storage/pharmacies/farma-1-center.jpg',
  },
];

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const mapCenter = { lat: 42.6210227, lng: 25.3974127 };

  const customMarkerIcon = {
    url: 'https://www.apteki-kazanlak.com/images/logo.png',
    scaledSize: new window.google.maps.Size(50, 50),
  };

  return (
    <div className="flex h-[120vh] flex-col  lg:h-[80vh] lg:flex-row">
      <div className="flex-1">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={selectedLocation ? selectedLocation : mapCenter}
          zoom={selectedLocation ? 18 : 15}
          panControl={true}
          zoomControl={true}
        >
          {data.map((location) => (
            <Marker
              key={location.id}
              position={location.location}
              icon={customMarkerIcon}
              onClick={() => handleLocationClick(location.location)}
            />
          ))}
        </GoogleMap>
      </div>
      <div className="w-full  lg:w-[25%]">
        <Links data={data} onLocationClick={handleLocationClick} />
      </div>
    </div>
  );
};

export default Maps;
