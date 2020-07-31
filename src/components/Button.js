import React from 'react';
import PropTypes from 'prop-types';

const CalcButton = ({ name }) => (
  <button type="submit">{name}</button>
);

CalcButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CalcButton;
