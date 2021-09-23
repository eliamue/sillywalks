import React from 'react';
import PropTypes from 'prop-types';
import Display from './Display';


const AnotherSilly = ({ count, increment }) => (
  <section>
    <h2>Another Silly</h2>
    <Display count={count} increment={increment} />
  </section>
);

AnotherSilly.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func,
};

export default AnotherSilly;
