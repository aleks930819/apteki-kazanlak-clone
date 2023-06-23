import { useLoaderData } from 'react-router-dom';
import PromoCard from '../../components/Promo/PromoCard';
import { getPromoProducts } from '../../services/apiPromoProducts';

const PromoScreen = () => {
  const promoData = useLoaderData();

  return (
    <div className="mx-auto  mt-10 w-[75vw] ">
      <ul
        className="grid grid-cols-1  items-center  gap-2 sm:grid-cols-4
      "
      >
        {promoData.map((item) => (
          <PromoCard
            key={item.id}
            name={item.name}
            image={item.image}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
            description={item.description}
          />
        ))}
      </ul>
    </div>
  );
};

export const loader = async () => {
  const promoProducts = await getPromoProducts();
  return promoProducts;
};

export default PromoScreen;
