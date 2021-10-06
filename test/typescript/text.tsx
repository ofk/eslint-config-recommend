import type { ReactNode } from 'react';
import React from 'react';

interface TextProps {
  color?: string;
  children: ReactNode;
}

export const Text: React.FC<TextProps> = ({ color = 'black', children }) => (
  <span className="text" style={{ color }}>
    {children}
  </span>
);
