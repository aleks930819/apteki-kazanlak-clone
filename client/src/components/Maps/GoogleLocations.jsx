import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import { GOOGLE_MAPS_API_KEY } from '../../../api';

const GoogleLocations = ({
  selectedLocation,
  memoizedPharmaciesData,
  handleLocationClick,
}) => {
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

  const mapCenter = { lat: 42.6199465, lng: 25.39431 };

  return (
    <div className="flex-1 border-r-[1px]  border-primary">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '100%' }}
        center={selectedLocation ? selectedLocation : mapCenter}
        zoom={selectedLocation ? 19 : 15}
        panControl={true}
        zoomControl={true}
      >
        {memoizedPharmaciesData?.map((location) => (
          <Marker
            key={location?._id}
            position={location?.googleMap}
            icon={customMarkerIcon}
            onClick={() => handleLocationClick(location?.googleMap)}
          ></Marker>
        ))}
      </GoogleMap>
    </div>
  );
};

export default GoogleLocations;
