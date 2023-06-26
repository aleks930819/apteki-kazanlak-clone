import { useJsApiLoader } from '@react-google-maps/api';

import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { GOOGLE_MAPS_API_KEY } from '../../../api';

import PharmacieAbout from '../../components/Pharmacie/PharmacieAbout';
import PharmacieBanner from '../../components/Pharmacie/PharmacieBanner';
import PharmacieHero from '../../components/Pharmacie/PharmacieHero';
import PharmacieWorking from '../../components/Pharmacie/PharmacieWorking';
import GoogleMapView from '../../components/GoogleMap/GoogleMap';

import { getPharmacie } from '../../services/apiPharmacies';

import Spinner from '../../ui/Spinner';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const Pharmacie = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const { slug } = useParams();
  const { isLoading, data: pharmacie } = useQuery(
    ['singlePharmacie', slug],
    () => getPharmacie(slug)
  );

  useDocumentTitle(`${pharmacie?.name} | Социални Аптеки Казанлък`);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  const markerPosition = {
    lat: pharmacie?.googleMap.lat,
    lng: pharmacie?.googleMap.lng,
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
    <div>
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
      <GoogleMapView markerPosition={markerPosition} />
    </div>
  );
};

export default Pharmacie;
