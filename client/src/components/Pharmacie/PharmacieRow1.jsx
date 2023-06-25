import ServiceHighlightsItems from '../ServiceHighlights/ServiceHighlightsItems';
import PharmacieRowWrapper from './PharmacieRowWrapper';
import PharmacieRowTitle from './PharmacieRowTitle';
import PharmacieRowImage from './PharmacieRowImage';

const ServiceHighlightsTitles = [
  {
    title: 'Обикновени рецепти',
  },
  {
    title: 'Рецепти по НЗОК',
  },
  {
    title: 'Жълти рецепти',
  },
  {
    title: 'Зелени рецепти',
  },
];

const PharmacieRow1 = ({ image }) => {
  return (
    <PharmacieRowWrapper>
      <PharmacieRowTitle title="Ние работим с" />
      <div>
        <ServiceHighlightsItems
          ServiceHighlightsTitles={ServiceHighlightsTitles}
        />
      </div>
      <PharmacieRowImage rounded={true} image={image} />
    </PharmacieRowWrapper>
  );
};

export default PharmacieRow1;
