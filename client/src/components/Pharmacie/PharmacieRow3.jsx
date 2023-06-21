import PharmacieRowImage from './PharmacieRowImage';
import PharmacieRowTitle from './PharmacieRowTitle';
import PharmacieRowWrapper from './PharmacieRowWrapper';

const PharmacieRow3 = () => {
  return (
    <PharmacieRowWrapper>
      <PharmacieRowTitle title="Контакти" />
      <div className="flex flex-col items-start ">
        <p className="font-semibold mb-4 text-primary">Телефон:</p>
        <br />
        <span className="font-semibold  text-primary">0431/7 50 57</span>
      </div>
      <PharmacieRowImage />
    </PharmacieRowWrapper>
  );
};

export default PharmacieRow3;
