import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

// eslint-disable-next-line react/jsx-props-no-spreading
const Button: React.FC<ButtonProps> = (props) => <button type="button" {...props} />;

export default Button;
