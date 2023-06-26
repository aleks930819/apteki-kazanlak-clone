import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '../../../api';
import Links from './Links';

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const mapCenter = { lat: 42.6210227, lng: 25.3974127 };
  const markerPosition = { lat: 42.6210227, lng: 25.3974127 };

  const customMarkerIcon = {
    url: 'https://www.apteki-kazanlak.com/images/logo.png',
    scaledSize: new window.google.maps.Size(50, 50),
  };

  return (
    <div className=" 3xl:h-[800px] flex w-[100%] h-[80vh] flex-col  lg:flex-row ">
      <div className="w-auto lg:w-[75%]">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={mapCenter}
          zoom={18}
          panControl={true}
          zoomControl={true}
        >
          <Marker position={markerPosition} icon={customMarkerIcon}></Marker>
        </GoogleMap>
      </div>
      <div className="w-auto border-l-[1px] border-primary lg:w-[25%]">
        <Links />
      </div>
    </div>
  );
};

export default Maps;
