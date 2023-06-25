import logo from '../../assets/history.png';
import { motion } from 'framer-motion';

const HistoryYearOdd = ({ item }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30, x: -30 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ duration: 1 }}
      className="mr-5 flex items-center  gap-x-10 self-start sm:ml-[-38px]   sm:mr-auto sm:w-[50%] "
    >
        <div className="ml-auto flex w-[100%]  sm:w-[40%] flex-col items-end justify-end">
        <p className=" text-2xl pl-1 text-blue-dark mb-4">{item.title}</p>
        <p className="center  ">{item.summary}</p>
      </div>
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
        <span className="timeline-item"></span>
        <span className="text-2xl font-bold text-blue-dark">{item.year}</span>
      </div>
    </motion.div>
  );
};

export default HistoryYearOdd;
