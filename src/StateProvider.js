
import React, { useState } from 'react';
import StateContext from './StateContext';

const StateProvider = ({ children }) => {
  // You can define state modification functions here
  const [curse, setCurse] = useState(false);

  return (
    <StateContext.Provider value={{ curse, setCurse }}>
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
