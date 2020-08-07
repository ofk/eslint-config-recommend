import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

// eslint-disable-next-line react/jsx-props-no-spreading
export const Button: React.FC<ButtonProps> = (props) => <button type="button" {...props} />;
