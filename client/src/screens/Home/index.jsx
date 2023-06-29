import useDocumentTitle from '../../hooks/useDocumentTitle';

import Hero from '../../components/Hero';
import ServiceHighlights from '../../components/ServiceHighlights';
import Locations from '../../components/Maps/Locations';

const HomeScreen = () => {
  useDocumentTitle('Социални Аптеки Казанлък');

  return (
    <main>
      <Hero />
      <ServiceHighlights />
      <Locations />
    </main>
  );
};

export default HomeScreen;
