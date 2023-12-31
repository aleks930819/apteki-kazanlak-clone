import { useQuery } from '@tanstack/react-query';

import { getPharmacies } from '../../services/apiPharmacies';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import ContactBanner from '../../components/Contact/ContactBanner';
import ContactInfo from '../../components/Contact/ContactInfo';

import Spinner from '../../ui/Spinner';

const PharmaciesScreen = () => {
  useDocumentTitle('Социални Аптеки Казанлък');

  const { isLoading, data: pharmaciesData } = useQuery({
    queryKey: ['pharmacies'],
    queryFn: getPharmacies,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <ContactBanner />
      <section className=" bg-grey-lighter-2 ">
        <div
          className="container mx-auto 
         mb-28   mt-24 w-full p-2 sm:max-w-lg sm:p-0
        "
        >
          <div className="grid grid-cols-1 gap-y-24 sm:grid-cols-2 sm:gap-y-32 lg:grid-cols-3">
            {pharmaciesData.map((pharmacy) => (
              <ContactInfo
                key={pharmacy.name}
                slug={pharmacy.slug}
                name={pharmacy.name}
                city={pharmacy.address.city}
                street={pharmacy.address.street}
                phone={pharmacy.phone}
                weekdayHours={pharmacy.workingHours.mondayToFriday}
                saturdayHours={pharmacy.workingHours.saturday}
                sundayHours={pharmacy.workingHours.sunday}
                managerName={pharmacy.managerName}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PharmaciesScreen;
