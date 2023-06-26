import Hero from '../../components/Hero';
import ServiceHighlights from '../../components/ServiceHighlights';
import Maps from '../../components/Maps/Maps';

import useDocumentTitle from '../../hooks/useDocumentTitle';

const HomeScreen = () => {
  useDocumentTitle('Социални Аптеки Казанлък');

  return (
    <main>
      <Hero />
      <ServiceHighlights />
      <Maps />
    </main>
  );
};

export default HomeScreen;
