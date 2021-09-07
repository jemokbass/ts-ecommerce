import { FC, ChangeEvent, useState } from 'react';

interface IInputProps {
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number';
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
}

const Input: FC<IInputProps> = ({ label, onChange, type, value, placeholder, name }) => {
  const [isActive, setIsActive] = useState(false);

  if (value && !isActive) {
    setIsActive(true);
  }

  const onFocusHandler = () => {
    setIsActive(true);
  };

  const onBlurEvent = () => {
    setIsActive(false);
  };

  return (
    <label className={`input${isActive ? ' active' : ''}`} onFocus={onFocusHandler} onBlur={onBlurEvent}>
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={isActive ? placeholder : ''}
        name={name}
      />
    </label>
  );
};

export default Input;
