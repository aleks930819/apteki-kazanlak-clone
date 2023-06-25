import logo from '../../assets/history2.png';

const HistoryYear = () => {
  return (
    <div className="flex w-full flex-col gap-20">
      {/* ODD */}
      <div className="mr-5 flex items-center gap-x-10 self-end ">
        <div className="mr-auto flex flex-col items-end justify-end">
          <p className="pb-2 text-2xl text-blue-dark">Хигия</p>
          <p className="text-end">
            Отваря врати първата частна аптека в Казанлък. Намира се на
            Централния Кооперативен пазар.
          </p>
        </div>
        <div
          className="relative flex flex-col items-center justify-center  gap-2 px-10"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100px',
            height: '120px',
          }}
        >
          <span className="timeline-item"></span>
          <span className="text-2xl font-bold text-blue-dark">1991</span>
        </div>
      </div>

      {/* EVEN */}
      <div className="ml-5 flex gap-x-10 self-start">
        <div
          className="relative flex flex-col items-center justify-center  gap-2 px-10"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100px',
            height: '120px',
          }}
        >
          <span className="timeline-item-2"></span>
          <span className="text-2xl font-bold text-blue-dark">1997</span>
        </div>
        <div className="mr-auto flex flex-col items-start justify-start">
          <p className="pb-2 text-2xl text-blue-dark">Фарма 1 Казанлък</p>
          <p className="text-start">
            Открива се Социална аптека Фарма 1 Казанлък на ул. „Генерал
            Скобелев“.
          </p>
        </div>
      </div>

      {/* ODD */}
      <div className="mr-5 flex items-center gap-x-10 self-end ">
        <div className="mr-auto flex flex-col items-end justify-end">
          <p className="pb-2 text-2xl text-blue-dark">Арника</p>
          <p className="text-end">
            Социална аптека Арника е открита през 1998г.
          </p>
        </div>
        <div
          className="relative flex flex-col items-center justify-center  gap-2 px-10"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100px',
            height: '120px',
          }}
        >
          <span className="timeline-item"></span>
          <span className="text-2xl font-bold text-blue-dark">1998</span>
        </div>
      </div>
      {/* EVEN */}
      <div className="ml-5 flex gap-x-10 self-start">
        <div
          className="relative flex flex-col items-center justify-center  gap-2 px-10"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100px',
            height: '120px',
          }}
        >
          <span className="timeline-item-2"></span>
          <span className="text-2xl font-bold text-blue-dark">2012</span>
        </div>
        <div className="mr-auto flex flex-col items-start justify-start">
          <p className="pb-2 text-2xl text-blue-dark">Фармавист</p>
          <p className="text-start">
            Открива се Социална Аптека Фармавист в един от големите квартали на
            Казанлък – ж.к. „Изток“.
          </p>
        </div>
      </div>

      {/* ODD */}
      <div className="mr-5 flex items-center gap-x-10 self-end ">
        <div className="mr-auto flex flex-col items-end justify-end">
          <p className="pb-2 text-2xl text-blue-dark">Фарма 1 Център</p>
          <p className="text-end">
            Социална аптека Фарма 1 Център е открита през 2017г.
          </p>
        </div>
        <div
          className="relative flex flex-col items-center justify-center  gap-2 px-10"
          style={{
            backgroundImage: `url(${logo})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            width: '100px',
            height: '120px',
          }}
        >
          <span className="timeline-item"></span>
          <span className="text-2xl font-bold text-blue-dark">2017</span>
        </div>
      </div>
    </div>
  );
};

export default HistoryYear;
