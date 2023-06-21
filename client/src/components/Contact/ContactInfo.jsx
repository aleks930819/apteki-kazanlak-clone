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
  manager,
}) => {
  return (
    <div className="h-[300px] w-[33.3333%]">
      <div className="flex flex-col gap-4">
        <Link to="/pharmacies/name">
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
        <ContactInfoManager manager={manager} />
      </div>
    </div>
  );
};

export default ContactInfo;
