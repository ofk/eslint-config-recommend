import PropTypes from 'prop-types';
import React from 'react';

export const Text = ({ children, color }) => (
  <span className="text" style={{ color }}>
    {children}
  </span>
);

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Text.defaultProps = {
  color: 'black',
};
