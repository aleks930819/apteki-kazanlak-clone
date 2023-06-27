import ServiceHighlightsItems from './ServiceHighlightsItems';

const ServiceHighlightsTitles = [
  {
    title: 'Качествено обслужване',
    fontSize: 'sm:text-3xl',
  },
  {
    title: 'Професионализъм',
    fontSize: 'sm:text-3xl',
  },
  {
    title: 'Достъпни цени',
    fontSize: 'sm:text-3xl',
  },
  {
    title: 'Силно мотивиран екип',
    fontSize: 'sm:text-3xl',
  },
];

const ServiceHighlights = () => {
  return (
    <div className="linear-background flex h-[22vh] items-center  justify-center border-b-[1px]  border-t-[1px] border-black text-primary sm:h-[44vh] sm:items-center sm:justify-center">
      <div className="mr-auto max-w-lg pl-2 sm:ml-auto sm:pl-0">
        <ServiceHighlightsItems
          ServiceHighlightsTitles={ServiceHighlightsTitles}
        />
      </div>
    </div>
  );
};

export default ServiceHighlights;
