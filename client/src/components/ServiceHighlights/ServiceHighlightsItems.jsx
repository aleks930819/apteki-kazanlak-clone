import withFontSize from '../../hoc/withFontSize';
import ServiceHighlightsItem from './ServiceHighlightsItem';

const ServiceHighlightsItems = ({ ServiceHighlightsTitles }) => {
  const ServiceHighlightsItemsWithFontSize = withFontSize(
    ServiceHighlightsItem
  );


  return (
    <div className="flex flex-col items-center justify-center ">
      <ul className="flex flex-col gap-2 text-primary">
        {ServiceHighlightsTitles?.map((item) => (
          <ServiceHighlightsItemsWithFontSize
            key={item.title}
            title={item.title}
            fontSize={item.fontSize}
          />
        ))}
      </ul>
    </div>
  );
};

export default ServiceHighlightsItems;
