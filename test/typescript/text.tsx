import React from 'react';
import PropTypes from 'prop-types';

interface TextProps {
  color?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ color, children }) => (
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
