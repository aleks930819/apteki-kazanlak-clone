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
    <div className="linear-background flex h-[50vh] items-center justify-center border-b-[1px] border-t-[1px] border-black text-primary">
      <ServiceHighlightsItems
        ServiceHighlightsTitles={ServiceHighlightsTitles}
      />
    </div>
  );
};

export default ServiceHighlights;
