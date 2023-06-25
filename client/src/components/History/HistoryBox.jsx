import HistoryYearEven from './HistoryYearEven';
import HistoryYearOdd from './HistoryYearOdd';

const HistoryBox = ({ data }) => {
  return (
    <div className="flex w-full flex-col gap-20">
      {data.map((item, index) => {
        if (index % 2 === 0) {
          return <HistoryYearOdd key={index} item={item} />;
        } else {
          return <HistoryYearEven key={index} item={item} />;
        }
      })}
    </div>
  );
};

export default HistoryBox;
