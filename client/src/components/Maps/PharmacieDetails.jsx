import PharmacieAddress from './PharmacieAddress';
import PharmacieDetailsImage from './PharmacieDetailsImage';

const PharmacieDetails = ({ pharmacie }) => {
  return (
    <div className=" flex flex-col ">
      <PharmacieDetailsImage pharmacie={pharmacie} />
      <PharmacieAddress pharmacie={pharmacie} />
    </div>
  );
};

export default PharmacieDetails;
