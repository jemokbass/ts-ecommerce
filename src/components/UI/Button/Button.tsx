import { FC } from 'react';
interface IButtonProps {
  type?: 'button' | 'reset' | 'submit';
  className?: string;
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ children, type, className, onClick }) => {
  return (
    <button className={`button${className ? ` ${className}` : ''}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
