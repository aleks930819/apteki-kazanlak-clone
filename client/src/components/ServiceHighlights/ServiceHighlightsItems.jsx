import ServiceHighlightsItem from './ServiceHighlightsItem';

const ServiceHighlightsItems = ({ ServiceHighlightsTitles }) => {
  return (
    <ul className="flex flex-col gap-2 sm:gap-4 text-primary ">
      {ServiceHighlightsTitles?.map((item) => (
        <ServiceHighlightsItem
          key={item.title}
          title={item.title}
          fontSize={item.fontSize}
        />
      ))}
    </ul>
  );
};

export default ServiceHighlightsItems;
