import React from 'react';
import PropTypes from 'prop-types';
import '../css/Button.css'

const CalcButton = ({ name }) => (
  <button className='Button' type="submit">{name}</button>
);

CalcButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CalcButton;
