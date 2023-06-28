import { createContext, useState } from 'react';

export const MobileNavMenuContext = createContext();

export const MobileNavMenuProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MobileNavMenuContext.Provider value={{ handleMenu, isOpen }}>
      {children}
    </MobileNavMenuContext.Provider>
  );
};
