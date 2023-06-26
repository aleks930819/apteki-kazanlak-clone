import WorkTimePicker from './WorkTimePicker';
import WorkTimeWrapper from '../components/WorktTme/WorkTimeWrapper';

import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';

const Workingtime = ({ workingTime, handleChangeWorkingTime }) => {
  return (
    <>
      <p className="mb-10 mt-10 text-center text-xl font-bold text-gray-700">
        Работно Време:
      </p>
      <div className="grid grid-cols-1 gap-x-20 gap-y-10 lg:grid-cols-2 ">
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
    </>
  );
};

export default Workingtime;
