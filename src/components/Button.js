import React from 'react';
import PropTypes from 'prop-types';

const calcButton = props => (
  <button type="submit">{props.name}</button>
);

calcButton.propTypes = {
  name: PropTypes.string,
};

export default calcButton;
