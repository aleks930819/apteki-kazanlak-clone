import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { useContext, useState } from 'react';

import useUpdatePharmacie from '../../hooks/useUpdatePharmacie';
import useDeletePharmacie from '../../hooks/useDeletePharmacie';
import useImagesUploader from '../../hooks/useUploadImages';

import { getPharmacie } from '../../services/apiPharmacies';

import WorkTimeWrapper from '../../components/WorktTme/WorkTimeWrapper';

import ActionForm from '../../ui/ActionForm';
import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import Spinner from '../../ui/Spinner';
import WorkTimePicker from '../../ui/WorkTimePicker';
import UploadImageInput from '../../ui/UploadImageInput';

import setChangedValue from '../../utils/changeValueHandler';
import { AuthContext } from '../../context/AuthContext';

const EditPharmacieScreen = () => {
  const { slug } = useParams();
  const { user } = useContext(AuthContext);

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
  });

  const { editingLoading, updatePharmacie } = useUpdatePharmacie(slug, user);
  const { deletePharmacie, deletingLoading } = useDeletePharmacie(slug, user);
  const { images, handleImagesUpload } = useImagesUploader();

  const [updatedImages, setUpdatedImages] = useState({
    mainImage: null,
    secondaryImage: null,
    managerImage: null,
    pharmacieImages: [null, null, null],
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!deletingLoading) {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData);
      const newData = {
        ...data,
        address: {
          city: data.city,
          street: data.street,
        },
        workingHours: {
          mondayToFriday: [
            workingTime.weekDays.open,
            workingTime.weekDays.close,
          ],
          saturday: [workingTime.saturday.open, workingTime.saturday.close],
          sunday: [
            workingTime.sunday.open ?? '',
            workingTime.sunday.close ?? '',
          ],
        },

        mainImage: images[0] ,
        secondaryImage: images[1],
        managerImage: images[2],
        pharmacieImages: [images[3], images[4], images[5]],
      };

      return console.log(newData);
      updatePharmacie(newData);
    }
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

      <InputField
        type="text"
        label="Телефон"
        id="phone"
        name="phone"
        value={values.phone}
        onChange={changeHandler}
        required
      />
      <TextAreaField
        label="История на аптеката"
        id="history"
        name="history"
        value={values.history}
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
      <TextAreaField
        label="Мениджър описание"
        id="managerDescription"
        name="managerDescription"
        value={values.managerDescription}
        onChange={changeHandler}
        required
      />

      <div className="flex w-full flex-col gap-4">
        <h3 className="text-xl font-semibold text-gray-800">
          Промяна на снимките
        </h3>
        <UploadImageInput
          id="mainImage"
          label="Заглавна снимка"
          handleFileChange={handleImagesUpload}
          value={images[0] || data?.mainImage}
          image={images[0] || data?.mainImage}
        />
        <UploadImageInput
          id="secondaryImage"
          label="Втора снимка"
          handleFileChange={handleImagesUpload}
          value={images[1] || data?.secondaryImage}
          image={images[1] || data?.secondaryImage}
        />

        <UploadImageInput
          id="managerImage"
          label="Снимка на мениджъра"
          handleFileChange={handleImagesUpload}
          value={images[2] || data?.managerImage}
          image={images[2] || data?.managerImage}
        />

        <UploadImageInput
          id="pharmaciesImage-1"
          label="Снимки на Аптеката -1"
          handleFileChange={handleImagesUpload}
          value={images[3] || data?.pharmacieImages[0]}
          image={images[3] || data?.pharmacieImages[0]}
          multiple={true}
        />
        <UploadImageInput
          id="pharmaciesImage-2"
          label="Снимки на Аптеката -2"
          handleFileChange={handleImagesUpload}
          value={images[4] || data?.pharmacieImages[1]}
          image={images[4] || data?.pharmacieImages[1]}
          multiple={true}
        />
        <UploadImageInput
          id="pharmaciesImage-3"
          label="Снимки на Аптеката -3"
          handleFileChange={handleImagesUpload}
          value={images[5] || data?.pharmacieImages[2]}
          image={images[5] || data?.pharmacieImages[2]}
          multiple={true}
        />
      </div>

      <div>
        <h2 className="mb-2 text-xl font-bold text-gray-700">Работно Време:</h2>
        {/* Weekdays working time */}
        <WorkTimeWrapper heading="Понеделник - Петък">
          <WorkTimePicker
            label="Отваряне"
            value={workingTime.weekDays.open}
            onChange={handleChangeWorkingTime('weekDays', 'open')}
          />
          <WorkTimePicker
            label="Затваряне"
            value={workingTime.weekDays.close}
            onChange={handleChangeWorkingTime('weekDays', 'close')}
          />
        </WorkTimeWrapper>

        {/* Saturday working time */}
        <WorkTimeWrapper heading="Събота">
          <WorkTimePicker
            label="Отваряне"
            value={workingTime.saturday.open}
            onChange={handleChangeWorkingTime('saturday', 'open')}
          />
          <WorkTimePicker
            label="Затваряне"
            value={workingTime.saturday.close}
            onChange={handleChangeWorkingTime('saturday', 'close')}
          />
        </WorkTimeWrapper>

        {/* Sunday Working time */}
        <WorkTimeWrapper heading="Неделя">
          <WorkTimePicker
            label="Отваряне"
            value={workingTime.sunday.open}
            onChange={handleChangeWorkingTime('sunday', 'open')}
          />
          <WorkTimePicker
            label="Затваряне"
            value={workingTime.sunday.close}
            onChange={handleChangeWorkingTime('sunday', 'close')}
          />
        </WorkTimeWrapper>
      </div>
    </ActionForm>
  );
};

export default EditPharmacieScreen;
