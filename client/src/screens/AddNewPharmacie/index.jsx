import { useLoadScript } from '@react-google-maps/api';

import { toast } from 'react-hot-toast';

import { useState, useContext } from 'react';

import { GOOGLE_MAPS_API_KEY } from '../../../api';

import useAddPharmacie from '../../hooks/useAddPharmacie';
import useImagesUploader from '../../hooks/useUploadImages';
import useWorkingTime from '../../hooks/useWorkingTime';


import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';
import Workingtime from '../../ui/Workingtime';
import InputsWrapper from '../../ui/InpusWrapper';

import { AuthContext } from '../../context/AuthContext';

import ChoiceButtons from '../../components/AddNewPharmacie/ChoiceButtons';
import UploadImagesContainer from '../../components/AddNewPharmacie/UploadImagesContainer';

import createNewData from '../../utils/createNewData';
import setChangedValue from '../../utils/changeValueHandler';

const libaries = ['places'];

const AddNewPharmacieScreen = () => {
  const { user } = useContext(AuthContext);
  const [values, setValues] = useState({
    name: '',
    city: 'гр. Казанлък',
    street: '',
    phone: '',
    history: '',
    managerName: '',
    managerTitle: '',
  });

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: libaries,
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

  const initialWorkingTime = {
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
  };

  const { workingTime, handleChangeWorkingTime } =
    useWorkingTime(initialWorkingTime);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = await createNewData(
      values,
      images,
      workingTime,
      selectedChoices
    );

    if (
      !values.name ||
      !values.city ||
      !values.street ||
      !values.phone ||
      !values.history ||
      !values.managerName ||
      !values.managerTitle
    ) {
      return toast.error('Моля попълнете всички полета!');
    }
    addPharmacie(newData);
  };

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
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
          onChange={changeHandler}
        />
        <InputField
          type="text"
          label="Населено място"
          id="city"
          name="city"
          required
          onChange={changeHandler}
        />

        <InputField
          type="text"
          label="Улица"
          id="street"
          name="street"
          required
          onChange={changeHandler}
        />
      </InputsWrapper>

      <InputsWrapper>
        <InputField
          type="text"
          label="Телефон"
          id="phone"
          name="phone"
          required
          onChange={changeHandler}
        />
        <InputField
          type="text"
          label="Мениджър"
          id="managerName"
          name="managerName"
          required
          onChange={changeHandler}
        />
        <InputField
          type="text"
          label="Мениджър образование"
          id="managerTitle"
          name="managerTitle"
          required
          onChange={changeHandler}
        />
      </InputsWrapper>

      <TextAreaField
        label="История на аптеката"
        id="history"
        name="history"
        required
        onChange={changeHandler}
      />

      <TextAreaField
        label="Мениджър описание"
        id="managerDescription"
        name="managerDescription"
        required
        onChange={changeHandler}
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
