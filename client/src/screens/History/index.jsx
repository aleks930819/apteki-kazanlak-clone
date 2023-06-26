import HistoryBox from '../../components/History/HistoryBox';

import { useEffect } from 'react';

const historyData = [
  {
    title: 'Хигия',
    year: '1991',
    summary:
      'Отваря врати първата частна аптека в Казанлък. Намира се на Централния Кооперативен пазар.',
  },
  {
    title: 'Фарма 1 Казанлък',
    year: '1997',
    summary:
      'Открива се Социална аптека Фарма 1 Казанлък на ул. „Генерал Скобелев“.',
  },
  {
    title: 'Арника',
    year: '1998',
    summary: 'Социална аптека Арника е открита през 1998г.',
  },
  {
    title: 'Фармавист',
    year: '2012',
    summary:
      'Открива се Социална Аптека Фармавист в един от големите квартали на Казанлък – ж.к. „Изток“.',
  },
  {
    title: 'Фарма 1 Павел Баня',
    year: '2015',
    summary: 'Социална аптека Фарма 1 Павел Баня е открита през 2015г',
  },
  {
    title: 'Фарма 1 Център',
    year: '2017',
    summary: 'Социална аптека Фарма 1 Център е открита през 2017г.',
  },
];

const HistoryScreen = () => {
  
  useEffect(() => {
    document.title = 'История | Социални аптеки Казанлък';
  }, []);

  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden py-[60px]">
      <div className="spine hidden sm:block"></div>
      <HistoryBox data={historyData} />
    </div>
  );
};

export default HistoryScreen;
