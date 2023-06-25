import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import PharmacieAbout from '../../components/Pharmacie/PharmacieAbout';
import PharmacieBanner from '../../components/Pharmacie/PharmacieBanner';
import PharmacieHero from '../../components/Pharmacie/PharmacieHero';
import PharmacieWorking from '../../components/Pharmacie/PharmacieWorking';
import { getPharmacie } from '../../services/apiPharmacies';
import { GoogleMap, Marker } from '@react-google-maps/api';
import { useJsApiLoader } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '../../../api';
import Spinner from '../../ui/Spinner';

const Pharmacie = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  const { slug } = useParams();
  const { isLoading, data: pharmacie } = useQuery(
    ['singlePharmacie', slug],
    () => getPharmacie(slug)
  );

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }

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
  } = pharmacie;

  const mapCenter = { lat: -3.745, lng: -38.523 };

  return (
    <>
      <PharmacieBanner name={name} mainImage={mainImage} />
      <PharmacieAbout history={history} secondaryImage={secondaryImage} />
      <PharmacieHero
        managerName={managerName}
        managerTitle={managerTitle}
        managerDescription={managerDescription}
        managerImage={managerImage}
      />
      <PharmacieWorking
        phone={phone}
        workingHours={workingHours}
        pharmacieImages={pharmacieImages}
      />
      <div className="h-[600px] w-full">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={mapCenter}
          zoom={12}
          panControl={true}
          zoomControl={true}
        ></GoogleMap>
      </div>
    </>
  );
};

export default Pharmacie;
