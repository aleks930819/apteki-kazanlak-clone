import LinkElement from './LinkElement';
import PharmacieInfo from './PharmacieInfo';

import { useState } from 'react';

const data = [
  {
    id: 1,
    name: 'Хигия',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    imageUrl:
      'https://www.apteki-kazanlak.com/storage/pharmacies/QvxKoZxq8EJH7mEslB1e.jpg',
  },
  {
    id: 2,
    name: 'Фарма 1 Казанлък',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    imageUrl: 'https://www.apteki-kazanlak.com/storage/pharmacies/arnika.jpg',
  },
  {
    id: 3,
    name: 'Арника',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    imageUrl:
      'https://www.apteki-kazanlak.com/storage/pharmacies/7UcfHZ3Z3uBJWda2pX8d.jpeg',
  },
  {
    id: 4,
    name: 'Фармавист',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    imageUrl:
      'https://www.apteki-kazanlak.com/storage/pharmacies/farma-1-center.jpg',
  },
  {
    id: 5,
    name: 'Фарма 1 Павел Баня',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    imageUrl:
      'https://www.apteki-kazanlak.com/storage/pharmacies/pharma-1-pavel-banya.jpg',
  },
  {
    id: 6,
    name: 'Фарма 1 Център',
    city: 'гр.Казанлък',
    street: 'ул. "Отец Паисий" № 33',
    phone: '0431/6 34 95',
    imageUrl:
      'https://www.apteki-kazanlak.com/storage/pharmacies/farma-1-center.jpg',
  },
];

const Links = () => {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItemId(itemId);
  };

  return (
    <>
      <ul className="mr-auto flex flex-col gap-2 pl-6  pt-5">
        {data.map((item) => (
          <LinkElement
            key={item.id}
            name={item.name}
            isActive={activeItemId === item.id}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </ul>
      {activeItemId !== null && (
        <PharmacieInfo data={data.find((item) => item.id === activeItemId)} />
      )}
    </>
  );
};

export default Links;
