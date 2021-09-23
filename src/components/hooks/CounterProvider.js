import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, decrement, increment }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useDecrement = () => {
  const { decremenet } = 
}

CounterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CounterProvider;
