import formattedHours from '../../utils/formattedHours';

const ContactInfoWorkHours = ({ weekdayHours, saturdayHours, sundayHours }) => {
  const weekends = (saturdayHours, sundayHours) => {
    if (
      saturdayHours[0] === sundayHours[0] &&
      saturdayHours[1] === sundayHours[1]
    ) {
      return (
        <li>
          Събота и Неделя:{' '}
          <span className=" font-semibold text-grey-dark-2">
            {formattedHours(saturdayHours[0], saturdayHours[1])}
          </span>
        </li>
      );
    } else {
      return (
        <>
          <li>
            Събота:{' '}
            <span className=" font-semibold text-grey-dark-2">
              {formattedHours(saturdayHours[0], saturdayHours[1])}
            </span>
          </li>
          <li>
            Неделя:{' '}
            <span className=" font-semibold text-grey-dark-2">
              {formattedHours(sundayHours[0], sundayHours[1])}
            </span>
          </li>
        </>
      );
    }
  };

  return (
    <p>
      <span className="font-semibold text-grey-dark">Работно време:</span>
      <ul>
        <li>
          Понеделник - Петък:{' '}
          <span className=" font-semibold text-grey-dark-2">
            {formattedHours(weekdayHours[0], weekdayHours[1])}
          </span>
          {weekends(saturdayHours, sundayHours)}
        </li>
      </ul>
    </p>
  );
};

export default ContactInfoWorkHours;
