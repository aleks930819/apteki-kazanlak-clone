import { useLoaderData } from 'react-router-dom';
import PharmacieAbout from '../../components/Pharmacie/PharmacieAbout';
import PharmacieBanner from '../../components/Pharmacie/PharmacieBanner';
import PharmacieHero from '../../components/Pharmacie/PharmacieHero';
import PharmacieWorking from '../../components/Pharmacie/PharmacieWorking';
import { getPharmacie } from '../../services/apiPharmacies';

const Pharmacie = () => {
  const {
    name,
    history,
    phone,
    workingHours,
    managerName,
    managerTitle,
    managerDescription,
  } = useLoaderData();
  return (
    <>
      <PharmacieBanner name={name} />
      <PharmacieAbout history={history} />
      <PharmacieHero
        managerName={managerName}
        managerTitle={managerTitle}
        managerDescription={managerDescription}
      />
      <PharmacieWorking phone={phone} workingHours={workingHours} />
    </>
  );
};

export const loader = async ({ params }) => {
  const pharmacie = await getPharmacie(params.slug);
  return pharmacie;
};

export default Pharmacie;
