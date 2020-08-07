import React from 'react';
import PropTypes from 'prop-types';

export const Text = ({ color, children }) => (
  <span className="text" style={{ color }}>
    {children}
  </span>
);

Text.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  color: 'black',
};
