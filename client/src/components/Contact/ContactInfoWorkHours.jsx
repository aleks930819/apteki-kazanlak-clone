const ContactInfoWorkHours = ({weekdayHours,saturdayHours,sundayHours}) => {

    const weekends = (saturdayHours, sundayHours) => {
        if (saturdayHours === sundayHours) {
          return (
            <li>
              Събота и Неделя:{' '} 
              <span className=" font-semibold text-grey-dark-2">
                {saturdayHours}
              </span>
            </li>
          );
        } else {
          return (
            <>
              <li>
                Събота:{' '}
                <span className=" font-semibold text-grey-dark-2">
                  {saturdayHours}
                </span>
              </li>
              <li>
                Неделя:{' '}
                <span className=" font-semibold text-grey-dark-2">
                  {sundayHours}
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
            {weekdayHours}
          </span>
          {weekends(saturdayHours, sundayHours)}
        </li>
      </ul>
    </p>
  );
};

export default ContactInfoWorkHours;
