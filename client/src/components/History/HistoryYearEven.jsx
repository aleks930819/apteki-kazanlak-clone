import logo from '../../assets/history.png';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const HistoryYearEven = ({ item }) => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={componentRef}
      initial={{ opacity: 0, y: -30, x: 30 }}
      animate={isVisible ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: .5 }}
      className="ml-5 flex items-center  gap-x-10 self-end sm:mr-[-38px] sm:w-[50%]"
    >
      <div
        className="relative flex flex-col items-center justify-center gap-2 px-10"
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '105px',
          height: '120px',
        }}
      >
        <span className="timeline-item-2"></span>
        <span className="text-2xl font-bold text-blue-dark">{item.year}</span>
      </div>
      <div className="mr-auto flex w-[100%] flex-col items-end justify-end pr-1 sm:w-[40%]">
        <p className="mb-4 text-2xl text-blue-dark">{item.title}</p>
        <p className="center">{item.summary}</p>
      </div>
    </motion.div>
  );
};

export default HistoryYearEven;
