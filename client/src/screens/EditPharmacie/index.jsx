import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { useLoadScript } from '@react-google-maps/api';

import { useContext, useState } from 'react';

import useUpdatePharmacie from '../../hooks/useUpdatePharmacie';
import useDeletePharmacie from '../../hooks/useDeletePharmacie';
import useImagesUploader from '../../hooks/useUploadImages';

import { getPharmacie } from '../../services/apiPharmacies';

import ActionForm from '../../ui/ActionForm';
import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import Spinner from '../../ui/Spinner';
import Workingtime from '../../ui/Workingtime';
import InputsWrapper from '../../ui/InpusWrapper';

import setChangedValue from '../../utils/changeValueHandler';
import { AuthContext } from '../../context/AuthContext';
import EditImagesContainer from '../../components/EditPharmacie/EditImagesContainer';

import UploadImageInput from '../../ui/UploadImageInput';
import UploadImagesWrapper from '../../ui/UploadImagesWrapper';

import createNewData from '../../utils/createNewData';

import { GOOGLE_MAPS_API_KEY } from '../../../api';

const EditPharmacieScreen = () => {
  const { slug } = useParams();
  const { user } = useContext(AuthContext);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const [workingTime, setWorkingTime] = useState({
    weekDays: {
      open: null,
      close: null,
    },
    saturday: {
      open: null,
      close: null,
    },
    sunday: {
      open: null,
      close: null,
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

  const [values, setValues] = useState({
    name: '',
    history: '',
    phone: '',
    managerName: '',
    city: '',
    street: '',
    workingHours: '',
    managerTitle: '',
    managerDescription: '',
    mainImage: '',
    secondaryImage: '',
    managerImage: '',
    pharmacieImages: [],
  });

  const { editingLoading, updatePharmacie } = useUpdatePharmacie(slug, user);
  const { deletePharmacie, deletingLoading } = useDeletePharmacie(slug, user);
  const { images, handleImagesUpload } = useImagesUploader();

  const { isLoading, data } = useQuery(['pharmacies', slug], () =>
    getPharmacie(slug)
  );

  if (isLoading) {
    return <Spinner />;
  }

  const {
    name,
    history,
    phone,
    managerName,
    address,
    workingHours,
    managerTitle,
    managerDescription,
    mainImage,
    secondaryImage,
    managerImage,
    pharmacieImages,
  } = data;

  if (!values.name) {
    setValues({
      name,
      history,
      phone,
      managerName,
      managerTitle,
      managerDescription,
      city: address.city,
      street: address.street,
      mainImage,
      secondaryImage,
      managerImage,
      pharmacieImages,
    });

    setWorkingTime({
      weekDays: {
        open: workingHours.mondayToFriday[0],
        close: workingHours.mondayToFriday[1],
      },
      saturday: {
        open: workingHours.saturday[0],
        close: workingHours.saturday[1],
      },
      sunday: {
        open: workingHours.sunday[0],
        close: workingHours.sunday[1],
      },
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = await createNewData(values, images, workingTime);

    updatePharmacie(newData);
  };

  const changeHandler = (e) => {
    setChangedValue(e, setValues);
  };

  return (
    <ActionForm
      heading="Редактирай информация за аптека"
      buttonName="Редактирай"
      onSubmit={handleSubmit}
      editingLoading={editingLoading}
      deletingLoading={deletingLoading}
      onDeleteAction={deletePharmacie}
      deleteButton="Изтрий аптека"
    >
      <InputsWrapper>
        <InputField
          type="text"
          label="Име на аптеката"
          id="name"
          name="name"
          value={values.name}
          onChange={changeHandler}
          required
        />
        <InputField
          type="text"
          label="Населено място"
          value={values.city}
          onChange={changeHandler}
          id="city"
          name="city"
          required
        />

        <InputField
          type="text"
          label="Улица"
          id="street"
          name="street"
          value={values.street}
          onChange={changeHandler}
          required
        />
      </InputsWrapper>

      <InputsWrapper>
        <InputField
          type="text"
          label="Телефон"
          id="phone"
          name="phone"
          value={values.phone}
          onChange={changeHandler}
          required
        />

        <InputField
          type="text"
          label="Мениджър"
          id="managerName"
          name="managerName"
          value={values.managerName}
          onChange={changeHandler}
          required
        />
        <InputField
          type="text"
          label="Мениджър образование"
          id="managerTitle"
          name="managerTitle"
          value={values.managerTitle}
          onChange={changeHandler}
          required
        />
      </InputsWrapper>
      <TextAreaField
        label="История на аптеката"
        id="history"
        name="history"
        value={values.history}
        onChange={changeHandler}
        required
      />

      <TextAreaField
        label="Мениджър описание"
        id="managerDescription"
        name="managerDescription"
        value={values.managerDescription}
        onChange={changeHandler}
        required
      />

      <EditImagesContainer
        images={images}
        handleImagesUpload={handleImagesUpload}
        data={values}
      />
      <Workingtime
        workingTime={workingTime}
        handleChangeWorkingTime={handleChangeWorkingTime}
      />
    </ActionForm>
  );
};

export default EditPharmacieScreen;
