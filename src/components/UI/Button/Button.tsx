import { FC } from 'react';

interface IButtonProps {
  type?: 'button' | 'reset' | 'submit';
}

const Button: FC<IButtonProps> = ({ children, type }) => {
  return (
    <button className="button" type={type}>
      {children}
    </button>
  );
};

export default Button;
