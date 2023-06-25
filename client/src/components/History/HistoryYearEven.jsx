import logo from '../../assets/history.png';
import { motion } from 'framer-motion';

const HistoryYearEven = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30, x: 30 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1 }}
      className="ml-5 flex items-center  gap-x-10 self-end sm:mr-[-38px]  sm:w-[50%] "
    >
      <div
        className="relative flex flex-col items-center justify-center  gap-2 px-10"
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
      <div className="mr-auto pr-1 flex w-[100%]  sm:w-[40%] flex-col items-end justify-end">
        <p className=" text-2xl text-blue-dark mb-4">{item.title}</p>
        <p className="center">{item.summary}</p>
      </div>
    </motion.div>
  );
};

export default HistoryYearEven;
