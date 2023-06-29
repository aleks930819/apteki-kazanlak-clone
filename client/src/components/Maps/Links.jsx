import LinkElement from './LinkElement';
import PharmacieDetails from './PharmacieDetails';

import { useState } from 'react';

const Links = ({ pharmacies, onLocationClick }) => {
  const [activeItemId, setActiveItemId] = useState(null);

  const handleItemClick = (itemId) => {
    setActiveItemId(itemId);
    const location = pharmacies?.find((item) => item._id === itemId).googleMap;
    onLocationClick(location);
  };

  return (
    <>
      <ul className="mr-auto flex flex-col gap-2 pl-6  pt-5 pb-5">
        {pharmacies?.map((item) => (
          <LinkElement
            key={item._id}
            name={item.name}
            activatedItemId={activeItemId}
            isActive={activeItemId === item._id}
            onClick={() => handleItemClick(item._id)}
          />
        ))}
      </ul>
      {activeItemId !== null && (
        <PharmacieDetails
          pharmacie={pharmacies?.find((item) => item._id === activeItemId)}
        />
      )}
    </>
  );
};

export default Links;
