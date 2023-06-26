import Hero from '../../components/Hero';
import ServiceHighlights from '../../components/ServiceHighlights';
import Maps from '../../components/Maps/Maps';

import { useEffect } from 'react';

const HomeScreen = () => {
  
  useEffect(() => {
    document.title = 'Социални аптеки Казанлък';
  }, []);

  return (
    <main>
      <Hero />
      <ServiceHighlights />
      <Maps />
    </main>
  );
};

export default HomeScreen;
