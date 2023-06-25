import HistoryBox from '../../components/History/HistoryBox';

const HistoryScreen = () => {
  return (
    <div className="h-full flex relative flex-col justify-center items-center overflow-hidden py-[60px]">
      <div className="spine absolute w-[4px] rounded-md bg-primary">
       
      </div>
      <HistoryBox />
    </div>
  );
};

export default HistoryScreen;
