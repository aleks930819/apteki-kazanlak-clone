import LinkElement from './LinkElement';
import PharmacieDetails from './PharmacieDetails';

import { useState } from 'react';

const Links = ({ pharmacies, onLocationClick }) => {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItemId(itemId);
    const location = pharmacies.find((item) => item.id === itemId).location;
    onLocationClick(location);
  };

  return (
    <>
      <ul className="mr-auto flex flex-col gap-2 pl-6  pt-5">
        {pharmacies.map((item) => (
          <LinkElement
            key={item.id}
            name={item.name}
            activatedItemId={activeItemId}
            isActive={activeItemId === item.id}
            onClick={() => handleItemClick(item.id)}
          />
        ))}
      </ul>
      {activeItemId !== null && (
        <PharmacieDetails
          pharmacie={pharmacies.find((item) => item.id === activeItemId)}
        />
      )}
    </>
  );
};

export default Links;
