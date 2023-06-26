import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { GOOGLE_MAPS_API_KEY } from '../../../api';

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
    <div className=" 3xl:h-[800px] flex w-[100%] flex-col  lg:flex-row ">
      <div className="w-auto lg:w-[70%]">
        {/* <GoogleMapView /> */}
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
      <div className="w-auto lg:w-[30%]">
        <ul className="mr-auto flex flex-col gap-4 pl-10 pt-5">
          <li className="cursor-pointer text-base font-semibold  text-primary">
            Хигия
          </li>
          <li className="flex cursor-pointer items-center text-base font-semibold text-primary">
            Фарма 1 Казанлък
          </li>
          <li className="cursor-pointer text-base font-semibold  text-primary">
            Арника
          </li>
          <li className="cursor-pointer text-base font-semibold  text-primary">
            Фармавист
          </li>
          <li className="cursor-pointer text-base font-semibold  text-primary">
            Фарма 1 Павел Баня
          </li>
          <li className="cursor-pointer text-base font-semibold  text-primary">
            Фарма 1 Център
          </li>
        </ul>
        <div className="mt-5">
          <img
            src="https://www.apteki-kazanlak.com/storage/pharmacies/farma-1-center.jpg"
            alt="logo"
            className="h-[100%] w-[100%] object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold text-blue-dark">Адрес</h2>
            <p>гр. Казанлък</p>
            <p>ул. "Отец Паисий" 2 Б</p>
            <p>0431/4 00 10к</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
