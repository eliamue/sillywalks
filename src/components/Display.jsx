import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ count, increment }) => (
  <section>
    <button onClick={increment}>&uarr;</button>
    <h4>{count}</h4>
  </section>
);

Display.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.string,
};

export default Display;
