import PromoCard from '../../components/Promo/PromoCard';
import { getPromoProducts } from '../../services/apiPromoProducts';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../ui/Spinner';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const PromoScreen = () => {
  useDocumentTitle(`Промоции | Социални Aптеки Казанлък`);

  const { isLoading, data: promoData } = useQuery({
    queryKey: ['promoProducts'],
    queryFn: getPromoProducts,
  });

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="mx-auto mb-2  mt-10 w-full flex justify-center items-center ">
      <ul className="grid grid-cols-1  items-center justify-center  gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
