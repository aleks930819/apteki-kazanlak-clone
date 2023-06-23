import Logo from '../../assets/history.png';

const HistoryBox = () => {
  return (
    <div className='mt-40'>
      <div className="justfiy-center mb-10  flex w-full items-center">
        <div className="flex flex-col gap-2 px-10">
          <h2 className="text-2xl text-blue-dark">Хигия</h2>
          <p className="text-blue-dark">
            Отваря врати първата частна аптека в Казанлък. Намира се на
            Централния Кооперативен пазар.
          </p>
        </div>
        <div className="history-year-circle-right history-year-circle">
          <h2 className="text-center text-base font-bold text-blue-dark">
            1991
          </h2>
        </div>
      </div>
      <div className="justfiy-center flex w-full flex-row-reverse items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-2xl text-blue-dark">Хигия</h2>
          <p className="text-blue-dark">
            Отваря врати първата частна аптека в Казанлък. Намира се на
            Централния Кооперативен пазар.
          </p>
        </div>
        <div className="history-year-circle-left history-year-circle">
          <h2 className="text-center text-base font-bold text-blue-dark">
            1991
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HistoryBox;
