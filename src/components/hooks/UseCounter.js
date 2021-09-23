import { useState } from 'react';

export const UseCounter = () => {
  const [counter, setCounter] = useState(0);
  const decrementCounter = () => setCounter((prevCount) => prevCount - 1);
  const incrementCounter = () => setCounter((prevCount) => prevCount + 1);

  return { counter, decrementCounter, incrementCounter };
};
