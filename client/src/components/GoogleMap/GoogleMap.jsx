import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '../../../api';

const GoogleMapView = ({ markerPosition }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const customMarkerIcon = {
    url: 'https://www.apteki-kazanlak.com/images/logo.png',
    scaledSize: new window.google.maps.Size(50, 50),
  };

  return (
    <div className="h-[600px] w-full">
      <div className="h-full  w-full">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={markerPosition}
          zoom={18}
          panControl={true}
          zoomControl={true}
        >
          <Marker position={markerPosition} icon={customMarkerIcon} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default GoogleMapView;
