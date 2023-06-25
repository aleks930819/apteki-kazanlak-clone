import PromoCard from '../../components/Promo/PromoCard';
import { getPromoProducts } from '../../services/apiPromoProducts';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../ui/Spinner';

const PromoScreen = () => {
  const { isLoading, data: promoData } = useQuery({
    queryKey: ['promoProducts'],
    queryFn: getPromoProducts,
  });

  if (isLoading) {
    return <Spinner />;
  }


  return (
    <div className="mx-auto  mt-10 w-[75vw] ">
      <ul className="grid grid-cols-1  items-center  gap-2 sm:grid-cols-4">
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
