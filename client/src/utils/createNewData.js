import { getGeocode, getLatLng } from 'use-places-autocomplete';

const createNewData = async (data, images, workingTime, selectedChoices) => {
  const address = `${data.city} ${data.street}`;
  const geocode = await getGeocode({ address });

  const { lat, lng } = getLatLng(geocode[0]);

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
