import { getGeocode, getLatLng } from 'use-places-autocomplete';
import { toast } from 'react-hot-toast';

const geocodeAddress = async (address) => {
  try {
    const geocode = await getGeocode({ address });
    const { lat, lng } = getLatLng(geocode[0]);
    return { lat, lng };
  } catch (error) {
    throw new Error('Моля въведете валиден адрес!');
  }
};

const createNewData = async (data, images, workingTime, selectedChoices) => {
  const address = `${data.city} ${data.street}`;
  let lat = 0;
  let lng = 0;

  try {
    const { lat: newLat, lng: newLng } = await geocodeAddress(address);
    lat = newLat;
    lng = newLng;
  } catch (error) {
    toast.error(error.message);
    return null;
  }

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
    mainImage: images.mainImage.url ? images.mainImage : data.mainImage,
    secondaryImage: images.secondaryImage.url
      ? images.secondaryImage
      : data.secondaryImage,
    managerImage: images.managerImage.url
      ? images.managerImage
      : data.managerImage,
    frontImage: images.frontImage.url ? images.frontImage : data.frontImage,
    pharmacieImages: [
      images.pharmaciesImage1.url
        ? images.pharmaciesImage1
        : data.pharmacieImages[0],
      images.pharmaciesImage2.url
        ? images.pharmaciesImage2
        : data.pharmacieImages[1],
      images.pharmaciesImage3.url
        ? images.pharmaciesImage3
        : data.pharmacieImages[2],
    ],
    workingWith: selectedChoices ?? data.workingWith,
  };

  return newData;
};

export default createNewData;
