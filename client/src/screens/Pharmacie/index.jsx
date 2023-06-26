import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import PharmacieAbout from '../../components/Pharmacie/PharmacieAbout';
import PharmacieBanner from '../../components/Pharmacie/PharmacieBanner';
import PharmacieHero from '../../components/Pharmacie/PharmacieHero';
import PharmacieWorking from '../../components/Pharmacie/PharmacieWorking';
import { getPharmacie } from '../../services/apiPharmacies';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useLoadScript } from '@react-google-maps/api';

import { GOOGLE_MAPS_API_KEY } from '../../../api';
import Spinner from '../../ui/Spinner';
import { useMemo } from 'react';

const Pharmacie = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const { slug } = useParams();
  const { isLoading, data: pharmacie } = useQuery(
    ['singlePharmacie', slug],
    () => getPharmacie(slug)
  );

  const markerPosition = useMemo(() => {
    return {
      lat: pharmacie.googleMap.lat,
      lng: pharmacie.googleMap.lng,
    };
  }, [pharmacie.googleMap.lat, pharmacie.googleMap.lng]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  const customMarkerIcon = {
    url: 'https://www.apteki-kazanlak.com/images/logo.png',
    scaledSize: new window.google.maps.Size(50, 50),
  };
  const {
    name,
    history,
    phone,
    workingHours,
    managerName,
    managerTitle,
    managerDescription,
    mainImage,
    secondaryImage,
    managerImage,
    pharmacieImages,
    workingWith,
  } = pharmacie;

  return (
    <>
      <PharmacieBanner name={name} mainImage={mainImage?.url} />
      <PharmacieAbout history={history} secondaryImage={secondaryImage?.url} />
      <PharmacieHero
        managerName={managerName}
        managerTitle={managerTitle}
        managerDescription={managerDescription}
        managerImage={managerImage?.url}
      />
      <PharmacieWorking
        phone={phone}
        workingWith={workingWith}
        workingHours={workingHours}
        pharmacieImages={pharmacieImages}
      />
      <div className="h-[600px] w-full">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          zoom={12}
          center={markerPosition}
          panControl={true}
          zoomControl={true}
        >
          <Marker position={markerPosition} icon={customMarkerIcon} />
        </GoogleMap>
      </div>
    </>
  );
};

export default Pharmacie;
