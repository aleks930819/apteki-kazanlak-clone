import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

const createNewData = async (data, images, workingTime, selectedChoices) => {
  const address = `${data.city} ${data.street}`;
  const geocode = await getGeocode({ address });

  const { lat, lng } = getLatLng(geocode[0]);

  console.log(lat, lng);
  console.log(workingTime);

  const newData = {
    ...data,
    address: {
      city: data.city,
      street: data.street,
    },
    workingHours: {
      mondayToFriday: [workingTime.weekDays.open, workingTime.weekDays.close],
      saturday: [workingTime.saturday.open, workingTime.saturday.close],
      sunday: [workingTime.sunday.open ?? '', workingTime.sunday.close ?? ''],
    },
    googleMap: {
      lat,
      lng,
    },
    mainImage: images.mainImage,
    secondaryImage: images.secondaryImage,
    managerImage: images.managerImage,
    pharmacieImages: [
      images.pharmaciesImage1,
      images.pharmaciesImage2,
      images.pharmaciesImage3,
    ],
    workingWith: selectedChoices,
  };

  return newData;
};

export default createNewData;
