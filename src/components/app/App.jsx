import { React, useState } from 'react';
import Silly from '../Silly';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <Silly
      count={count}
      increment={() => setCount((prevCount) => prevCount + 1)}
      decrement={() => setCount((prevCount) => prevCount - 1)}
    />
  );
}
