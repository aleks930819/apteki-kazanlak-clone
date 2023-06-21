import PharmacieRowTitle from './PharmacieRowTitle';
import PharmacieRowWrapper from './PharmacieRowWrapper';
import PharmacieRowImage from './PharmacieRowImage';

const PharmacieRow2 = () => {
  return (
    <PharmacieRowWrapper>
      <PharmacieRowTitle title="Работно време" />
      <div className="flex flex-col items-start ">
        <p className="font-semibold mb-4 text-primary">
          Понеделник – Петък: 08:00ч. – 19:00ч.
        </p>
        <br />
        <p className="font-semibold mb-4 text-primary">Събота: 09:00ч. – 14:00ч.</p>
        <br />
        <p className="font-semibold text-primary">Неделя: Почивен ден</p>
      </div>
      <PharmacieRowImage />
    </PharmacieRowWrapper>
  );
};

export default PharmacieRow2;
