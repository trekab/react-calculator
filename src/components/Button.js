import React from 'react';
import PropTypes from 'prop-types';
import '../css/Button.css';

const CalcButton = ({ name, color, wide }) => (
  <button
    style={{ width: wide ? '50%' : '25%', backgroundColor: color }}
    className="Button"
    type="submit"
  >
    {name}
  </button>
);

CalcButton.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};

CalcButton.defaultProps = {
  color: '#F5923E',
  wide: false,
};

export default CalcButton;
