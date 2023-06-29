import { useJsApiLoader } from '@react-google-maps/api';
import { useQuery } from '@tanstack/react-query';
import { useState, useMemo } from 'react';

import { GOOGLE_MAPS_API_KEY } from '../../../api';

import Links from './Links';

import { getPharmacies } from '../../services/apiPharmacies';
import GoogleLocations from './GoogleLocations';

// const pharmacies = [
//   {
//     id: 1,
//     name: 'Хигия',
//     city: 'гр.Казанлък',
//     street: 'ул. "Отец Паисий" № 33',
//     phone: '0431/6 34 95',
//     location: {
//       lat: 42.6210227,
//       lng: 25.3974127,
//     },
//     imageUrl:
//       'https://www.apteki-kazanlak.com/storage/pharmacies/QvxKoZxq8EJH7mEslB1e.jpg',
//   },
//   {
//     id: 2,
//     name: 'Фарма 1 Казанлък',
//     city: 'гр.Казанлък',
//     street: 'ул. "Ген Стобелев" 17',
//     location: {
//       lat: 42.6207892,
//       lng: 25.3910188,
//     },
//     phone: '0431/7 50 57',
//     imageUrl: 'https://www.apteki-kazanlak.com/storage/pharmacies/arnika.jpg',
//   },
//   {
//     id: 3,
//     name: 'Арника',
//     city: 'гр.Казанлък',
//     street: 'бул. Розова долина №2',
//     phone: '0431/6 24 15',
//     location: {
//       lat: 42.6185444,
//       lng: 25.3930776,
//     },
//     imageUrl:
//       'https://www.apteki-kazanlak.com/storage/pharmacies/7UcfHZ3Z3uBJWda2pX8d.jpeg',
//   },
//   {
//     id: 4,
//     name: 'Фармавист',
//     city: 'гр.Казанлък',
//     street: 'кв. "Изток", бл. 76',
//     phone: '0431/4 00 40',
//     location: {
//       lat: 42.6241321,
//       lng: 25.3990883,
//     },
//     imageUrl:
//       'https://www.apteki-kazanlak.com/storage/pharmacies/farma-1-center.jpg',
//   },
//   {
//     id: 5,
//     name: 'Фарма 1 Павел Баня',
//     city: 'гр.Казанлък',
//     street: 'ул. Ген. Столетов 14',
//     phone: '04361/20 60',
//     location: {
//       lat: 42.6228519,
//       lng: 25.3864468,
//     },
//     imageUrl:
//       'https://www.apteki-kazanlak.com/storage/pharmacies/pharma-1-pavel-banya.jpg',
//   },
//   {
//     id: 6,
//     name: 'Фарма 1 Център',
//     city: 'гр.Казанлък',
//     street: 'ул. "Отец Паисий" 2 Б',
//     phone: '0431/4 00 10',
//     location: {
//       lat: 42.6199465,
//       lng: 25.39431,
//     },
//     imageUrl:
//       'https://www.apteki-kazanlak.com/storage/pharmacies/farma-1-center.jpg',
//   },
// ];

const Locations = () => {
  const { data: pharmaciesData } = useQuery({
    queryKey: ['pharmacies'],
    queryFn: getPharmacies,
  });

  const memoizedPharmaciesData = useMemo(
    () => pharmaciesData,
    [pharmaciesData]
  );

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

 

  return (
    <div className="flex h-[120vh] flex-col  lg:h-[80vh] lg:flex-row">
      <GoogleLocations
        memoizedPharmaciesData={memoizedPharmaciesData}
        handleLocationClick={handleLocationClick}
        selectedLocation={selectedLocation}
      />
      <nav className="w-full  lg:w-[25%]">
        <Links
          pharmacies={memoizedPharmaciesData}
          onLocationClick={handleLocationClick}
        />
      </nav>
    </div>
  );
};

export default Locations;
