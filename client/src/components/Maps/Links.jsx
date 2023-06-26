import LinkElement from './LinkElement';
import PharmacieInfo from './PharmacieInfo';

import { useState } from 'react';

const Links = ({ data, onLocationClick }) => {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItemId(itemId);
    const location = data.find((item) => item.id === itemId).location;
    onLocationClick(location);
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
