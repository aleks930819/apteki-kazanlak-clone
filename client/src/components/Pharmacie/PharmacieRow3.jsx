import PharmacieRowImage from './PharmacieRowImage';
import PharmacieRowTitle from './PharmacieRowTitle';
import PharmacieRowWrapper from './PharmacieRowWrapper';

const PharmacieRow3 = ({ phone }) => {
  return (
    <PharmacieRowWrapper>
      <PharmacieRowTitle title="Контакти" />
      <div className="flex flex-col items-start ">
        <p className="mb-4 font-semibold text-primary">Телефон:</p>
        <br />
        <span className="font-semibold  text-primary">{phone}</span>
      </div>
      <PharmacieRowImage />
    </PharmacieRowWrapper>
  );
};

export default PharmacieRow3;
