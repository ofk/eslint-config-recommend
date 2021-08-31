import React from 'react';

interface TextProps {
  color?: string; // eslint-disable-line react/require-default-props
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({ color = 'black', children }) => (
  <span className="text" style={{ color }}>
    {children}
  </span>
);
