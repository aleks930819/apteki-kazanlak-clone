import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import HeaderLogo from '../Header/HeaderLogo';
// import Logo from '../../assets//logo.png';
import { GOOGLE_MAPS_API_KEY } from '../../../api';

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const mapCenter = { lat: -3.745, lng: -38.523 };
  // const markerPosition = { lat: -3.755, lng: -38.523 };

  return (
    <div className="flex h-auto w-[100%] flex-col lg:h-[700px] lg:flex-row  xl:h-[800px] ">
      <div className="w-auto lg:w-[70%]">
        <GoogleMap
          mapContainerStyle={{ width: '100%', height: '100%' }}
          center={mapCenter}
          zoom={12}
          panControl={true}
          zoomControl={true}
        />
        {/* <Marker position={markerPosition}>
          <div className="bg-primary bg-opacity-90 px-4 py-1 text-center text-2xl text-white sm:text-6xl">
            <HeaderLogo />
          </div>
        </Marker> */}
      </div>
      <div className="w-auto lg:w-[30%]">
        <ul className="mr-auto flex flex-col gap-4 pl-10 pt-5">
          <li className="text-base font-semibold text-primary ">Хигия</li>
          <li className="flex items-center text-base font-semibold text-primary">
            Фарма 1 Казанлък
          </li>
          <li className="text-base font-semibold text-primary ">Арника</li>
          <li className="text-base font-semibold text-primary ">Фармавист</li>
          <li className="text-base font-semibold text-primary ">
            Фарма 1 Павел Баня
          </li>
          <li className="text-base font-semibold text-primary ">
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
