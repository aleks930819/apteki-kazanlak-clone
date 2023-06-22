import ContactInfoAddress from './ContactInfoAddress';
import ContactInfoManager from './ContactInfoManager';
import ContactInfoPhone from './ContactInfoPhone';
import ContactInfoWorkHours from './ContactInfoWorkHours';
import { Link } from 'react-router-dom';

const ContactInfo = ({
  name,
  city,
  street,
  phone,
  weekdayHours,
  saturdayHours,
  sundayHours,
  managerName,
}) => {
  return (
    <div
      className="h-[300px] 
    "
    >
      <div className="group flex flex-col gap-4">
        <Link
          to="/pharmacies/name"
          className="relative block w-fit text-xl after:absolute after:block after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-primary after:transition after:duration-300 after:content-[''] after:hover:scale-x-100
          "
        >
          <h2 className="text-xl font-semibold uppercase text-primary">
            {name}
          </h2>
        </Link>
        <ContactInfoAddress city={city} street={street} />
        <ContactInfoPhone phone={phone} />
        <ContactInfoWorkHours
          weekdayHours={weekdayHours}
          saturdayHours={saturdayHours}
          sundayHours={sundayHours}
        />
        <ContactInfoManager managerName={managerName} />
      </div>
      <div className="mx-auto mt-5 h-[.5px] w-24 bg-grey-dark sm:hidden" />
    </div>
  );
};

export default ContactInfo;
