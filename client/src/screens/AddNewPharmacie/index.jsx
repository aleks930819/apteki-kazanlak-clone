import { toast } from 'react-hot-toast';

import { useState } from 'react';

import useAddPharmacie from '../../hooks/useAddPharmacie';

import InputField from '../../ui/InputField';
import TextAreaField from '../../ui/TextAreaField';
import ActionForm from '../../ui/ActionForm';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

import WorkTimePicker from '../../ui/WorkTimePicker';
import WorkTimeWrapper from '../../components/WorktTme/WorkTimeWrapper';

const AddNewPharmacieScreen = () => {
  const { addPharmacie, addingPharmacieLoading } = useAddPharmacie();

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
    };

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

    addPharmacie(newData);
  };

  return (
    <ActionForm
      heading="Добавате нова статия"
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
    </ActionForm>
  );
};

export default AddNewPharmacieScreen;
