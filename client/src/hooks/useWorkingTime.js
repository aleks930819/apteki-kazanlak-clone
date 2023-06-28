import { useState } from 'react';

const useWorkingTime = (initialWorkingTime) => {
  const [workingTime, setWorkingTime] = useState(initialWorkingTime);

  const handleChangeWorkingTime = (day, type) => (value) => {
    setWorkingTime((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [type]: value,
      },
    }));
  };

  return { workingTime, setWorkingTime, handleChangeWorkingTime };
};

export default useWorkingTime;
