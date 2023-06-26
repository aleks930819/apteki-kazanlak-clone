import { toast } from 'react-hot-toast';

import { useState, useContext } from 'react';

import useAddPharmacie from '../../hooks/useAddPharmacie';
import useImagesUploader from '../../hooks/useUploadImages';

import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';
import Workingtime from '../../ui/Workingtime';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import { AuthContext } from '../../context/AuthContext';
import ChoiceButtons from '../../components/AddNewPharmacie/ChoiceButtons';
import UploadImagesContainer from '../../components/AddNewPharmacie/UploadImagesContainer';

import { useLoadScript } from '@react-google-maps/api';

import { GOOGLE_MAPS_API_KEY } from '../../../api';
import InputsWrapper from '../../ui/InpusWrapper';
import createNewData from '../../utils/createNewData';
const AddNewPharmacieScreen = () => {
  const { user } = useContext(AuthContext);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const { addPharmacie, addingPharmacieLoading } = useAddPharmacie(user);

  const { images, handleImagesUpload, isLoadingImageUpload } =
    useImagesUploader();

  const [selectedChoices, setSelectedChoices] = useState([]);

  const handleChoiceClick = (choice) => {
    if (selectedChoices.includes(choice)) {
      setSelectedChoices(selectedChoices.filter((c) => c !== choice));
    } else {
      setSelectedChoices([...selectedChoices, choice]);
    }
  };

  const [workingTime, setWorkingTime] = useState({
    weekDays: {
      open: '08:00',
      close: '20:00',
    },
    saturday: {
      open: '08:00',
      close: '20:00',
    },
    sunday: {
      open: '08:00',
      close: '20:00',
    },
  });

  const handleChangeWorkingTime = (day, type) => (value) => {
    setWorkingTime((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    // const newData = {
    //   ...data,
    //   address: {
    //     city: data.city,
    //     street: data.street,
    //   },
    //   workingHours: {
    //     mondayToFriday: [workingTime.weekDays.open, workingTime.weekDays.close],
    //     saturday: [workingTime.saturday.open, workingTime.saturday.close],
    //     sunday: [workingTime.sunday.open ?? '', workingTime.sunday.close ?? ''],
    //   },

    //   googleMap: {
    //     lat,
    //     lng,
    //   },

    //   mainImage: images.mainImage,
    //   secondaryImage: images.secondaryImage,
    //   managerImage: images.managerImage,
    //   pharmacieImages: [
    //     images.pharmaciesImage1,
    //     images.pharmaciesImage2,
    //     images.pharmaciesImage3,
    //   ],
    //   workingWith: selectedChoices,
    // };

    const newData = await createNewData(
      data,
      images,
      workingTime,
      selectedChoices
    );

    addPharmacie(newData);

    if (
      !data.name ||
      !data.city ||
      !data.street ||
      !data.phone ||
      !data.history ||
      !data.managerName ||
      !data.managerTitle
    ) {
      return toast.error('Моля попълнете всички полета!');
    }
  };

  return (
    <ActionForm
      heading="Добавате нова аптека"
      buttonName="Добави"
      onSubmit={handleSubmit}
      isLoading={addingPharmacieLoading}
    >
      <InputsWrapper>
        <InputField
          type="text"
          label="Име на аптеката"
          id="name"
          name="name"
          required
        />
        <InputField
          type="text"
          label="Населено място"
          id="city"
          name="city"
          required
        />

        <InputField
          type="text"
          label="Улица"
          id="street"
          name="street"
          required
        />
      </InputsWrapper>

      <InputsWrapper>
        <InputField
          type="text"
          label="Телефон"
          id="phone"
          name="phone"
          required
        />
        <InputField
          type="text"
          label="Мениджър"
          id="managerName"
          name="managerName"
          required
        />
        <InputField
          type="text"
          label="Мениджър образование"
          id="managerTitle"
          name="managerTitle"
          required
        />
      </InputsWrapper>

      <TextAreaField
        label="История на аптеката"
        id="history"
        name="history"
        required
      />

      <TextAreaField
        label="Мениджър описание"
        id="managerDescription"
        name="managerDescription"
        required
      />
      <label className=" text-xl font-bold text-gray-700">Рецепти</label>
      <ChoiceButtons
        selectedChoices={selectedChoices}
        handleChoiceClick={handleChoiceClick}
      />

      <UploadImagesContainer
        images={images}
        handleImagesUpload={handleImagesUpload}
        isLoading={isLoadingImageUpload}
      />
      <Workingtime
        workingTime={workingTime}
        handleChangeWorkingTime={handleChangeWorkingTime}
      />
    </ActionForm>
  );
};

export default AddNewPharmacieScreen;
