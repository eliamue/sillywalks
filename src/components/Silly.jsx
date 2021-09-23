import React from 'react';
import PropTypes from 'prop-types';
import AnotherSilly from './AnotherSilly';

const Silly = ({ count, increment, decrement }) => (
  <section>
    <h2>Silly</h2>
    <button onClick={decrement}>&darr;</button>
    <AnotherSilly 
      count={count} 
      increment={increment} 
    />
  </section>
);

Silly.propTypes = {
  count: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
};

export default Silly;
