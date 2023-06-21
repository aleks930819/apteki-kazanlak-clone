import ServiceHighlightsItems from './ServiceHighlightsItems';

const ServiceHighlightsTitles = [
  {
    title: 'Качествено обслужване',
    fontSize: 'text-4xl',
  },
  {
    title: 'Професионализъм',
    fontSize: 'text-4xl',
  },
  {
    title: 'Достъпни цени',
    fontSize: 'text-4xl',
  },
  {
    title: 'Силно мотивиран екип',
    fontSize: 'text-4xl',
  },
];

const ServiceHighlights = () => {
  return (
    <div className="linear-background flex h-[40vh] items-center justify-center border-b-[1px] border-t-[1px] border-black text-primary">
      <ServiceHighlightsItems
        ServiceHighlightsTitles={ServiceHighlightsTitles}
      />
    </div>
  );
};

export default ServiceHighlights;
