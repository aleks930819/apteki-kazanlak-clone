import { useQuery } from '@tanstack/react-query';

import { getPromoProducts } from '../../services/apiPromoProducts';

import useDocumentTitle from '../../hooks/useDocumentTitle';

import PromoCard from '../../components/Promo/PromoCard';

import Spinner from '../../ui/Spinner';

const PromoScreen = () => {
  useDocumentTitle('Промоции | Социални Aптеки Казанлък');

  const { isLoading, data: promoData } = useQuery({
    queryKey: ['promoProducts'],
    queryFn: getPromoProducts,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mb-2  ml-auto mr-auto mt-10 w-full max-w-lg ">
      <ul className="grid grid-cols-1  items-center justify-center  gap-x-16 gap-y-2 sm:grid-cols-2 lg:grid-cols-4">
        {promoData.map((item) => (
          <PromoCard
            key={item.id}
            name={item.name}
            image={item.image.url}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};

export default PromoScreen;
