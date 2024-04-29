import type { ReactNode } from 'react';

import React from 'react';

interface TextProps {
  children: ReactNode;
  color?: string;
}

export const Text: React.FC<TextProps> = ({ children, color = 'black' }) => (
  <span className="text" style={{ color }}>
    {children}
  </span>
);
