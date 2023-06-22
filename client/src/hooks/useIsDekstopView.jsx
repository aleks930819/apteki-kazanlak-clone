import { useState, useEffect } from 'react';

const useIsDekstopView = () => {
  const [isDekstopView, setIsDekstopView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsDekstopView(true);
      } else {
        setIsDekstopView(false);
      }
    };

    handleResize(); // Call the function initially to set the initial value

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [isDekstopView];
};

export default useIsDekstopView;
