import React, { createContext, useState, useContext } from 'react';

const ActiveOrderContext = createContext();

export const useActiveOrder = () => {
  return useContext(ActiveOrderContext);
};

export const ActiveOrderProvider = ({ children }) => {
  const [activeOrder, setActiveOrder] = useState(null);

  return (
    <ActiveOrderContext.Provider value={{ activeOrder, setActiveOrder }}>
      {children}
    </ActiveOrderContext.Provider>
  );
};
