import HistoryBox from '../../components/History/HistoryBox';

const HistoryScreen = () => {
  return (
    <div className="flex h-screen justify-center">
      {/* <div className="mt-20  flex h-screen items-center justify-center rounded-sm">
        <div className=" relative h-[95%] w-1 bg-primary ">
          <div className=" absolute right-1  top-0 h-1 w-3 bg-primary "></div>
          <div className=" absolute left-1  top-0 h-1 w-3 bg-primary "></div>
        </div>
      </div> */}
      <HistoryBox />
    </div>
  );
};

export default HistoryScreen;
