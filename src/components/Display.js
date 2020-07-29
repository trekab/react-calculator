import React from 'react';
import PropTypes from 'prop-types';

const display = props => (
  <div>
    <div>{props.result}</div>
  </div>
);

display.propTypes = {
  result: PropTypes.string,
};

display.defaultProps = {
  result: '0',
};

export default display;
