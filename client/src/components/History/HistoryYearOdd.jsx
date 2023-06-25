import logo from '../../assets/history.png';
import { motion } from 'framer-motion';

const HistoryYearOdd = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30, x: -30 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1 }}
      className="mr-10 flex items-center  gap-x-10 self-start sm:ml-[-38px]   sm:mr-auto sm:w-[50%] "
    >
      <div className="mx-auto    mr-auto flex flex-col items-end justify-end ">
        <p className="mb-4 text-4xl text-blue-dark">{item.title}</p>
        <p className="text-end">{item.summary}</p>
      </div>
      <div
        className="relative flex flex-col items-center justify-center gap-2 px-10 "
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'cover',
          width: '105px',
          height: '120px',
        }}
      >
        <span className="timeline-item"></span>
        <span className="text-2xl font-bold text-blue-dark">{item.year}</span>
      </div>
    </motion.div>
  );
};

export default HistoryYearOdd;
