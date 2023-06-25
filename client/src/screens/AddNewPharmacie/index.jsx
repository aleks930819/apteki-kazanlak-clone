import { toast } from 'react-hot-toast';

import { useState, useContext } from 'react';

import useAddPharmacie from '../../hooks/useAddPharmacie';
import useImagesUploader from '../../hooks/useUploadImages';

import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';
import WorkTimePicker from '../../ui/WorkTimePicker';
import UploadImageInput from '../../ui/UploadImageInput';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import WorkTimeWrapper from '../../components/WorktTme/WorkTimeWrapper';

import { AuthContext } from '../../context/AuthContext';

const AddNewPharmacieScreen = () => {
  const { user } = useContext(AuthContext);

  const { addPharmacie, addingPharmacieLoading } = useAddPharmacie(user);

  const { images, handleImagesUpload } = useImagesUploader();

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

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

      mainImage: images[0],
      secondaryImage: images[1],
      managerImage: images[2],
      pharmacieImages: [images[3], images[4], images[5]],
    };

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
      <InputField
        type="text"
        label="Телефон"
        id="phone"
        name="phone"
        required
      />
      <TextAreaField
        label="История на аптеката"
        id="history"
        name="history"
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
      <TextAreaField
        label="Мениджър описание"
        id="managerDescription"
        name="managerDescription"
        required
      />
      <UploadImageInput
        id="mainImage"
        label="Заглавна снимка"
        handleFileChange={handleImagesUpload}
        value={images[0]}
        image={images[0]}
      />
      <UploadImageInput
        id="secondaryImage"
        label="Втора снимка"
        handleFileChange={handleImagesUpload}
        value={images[1]}
        image={images[1]}
      />

      <UploadImageInput
        id="managerImage"
        label="Снимка на мениджъра"
        handleFileChange={handleImagesUpload}
        value={images[2]}
        image={images[2]}
      />

      <UploadImageInput
        id="pharmaciesImage-1"
        label="Снимки на Аптеката -1"
        handleFileChange={handleImagesUpload}
        value={images[3]}
        image={images[3]}
        multiple={true}
      />
      <UploadImageInput
        id="pharmaciesImage-2"
        label="Снимки на Аптеката -2"
        handleFileChange={handleImagesUpload}
        value={images[4]}
        image={images[4]}
        multiple={true}
      />
      <UploadImageInput
        id="pharmaciesImage-3"
        label="Снимки на Аптеката -3"
        handleFileChange={handleImagesUpload}
        value={images[5]}
        image={images[5]}
        multiple={true}
      />

      <div>
        <h2 className="mb-2 font-bold text-gray-700">Работно Време:</h2>
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

export default AddNewPharmacieScreen;
