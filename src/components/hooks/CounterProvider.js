import React, { createContext } from 'react';

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  return (
    <CounterContext.Provider>
      {children}
    </CounterContext.Provider>);
};

export default CounterProvider;
