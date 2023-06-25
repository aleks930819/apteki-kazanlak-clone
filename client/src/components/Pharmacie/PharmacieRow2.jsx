import PharmacieRowTitle from './PharmacieRowTitle';
import PharmacieRowWrapper from './PharmacieRowWrapper';
import PharmacieRowImage from './PharmacieRowImage';
import formattedHours from '../../utils/formattedHours';

const PharmacieRow2 = ({ workingHours, image }) => {
  const { mondayToFriday, saturday, sunday } = workingHours;

  return (
    <PharmacieRowWrapper>
      <PharmacieRowTitle title="Работно време" />
      <div className="flex flex-col items-start ">
        <p className="mb-0 font-semibold text-primary sm:mb-4">
          Понеделник – Петък:{' '}
          {formattedHours(mondayToFriday[0], mondayToFriday[1])}
        </p>
        <br />
        <p className="mb-0  font-semibold text-primary sm:mb-4">
          Събота: {formattedHours(saturday[0], saturday[1])}
        </p>
        <br />
        <p className="font-semibold text-primary">
          Неделя: {formattedHours(sunday[0], sunday[1])}
        </p>
      </div>
      <PharmacieRowImage image={image} />
    </PharmacieRowWrapper>
  );
};

export default PharmacieRow2;
