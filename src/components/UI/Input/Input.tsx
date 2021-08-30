import { FC, ChangeEvent } from 'react';

interface IInputProps {
  label: string;
  type: 'text' | 'email' | 'password' | 'number';
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInputProps> = ({ label, onChange, type, value }) => {
  return (
    <label className="input">
      <span>{label}</span>
      <input type={type} value={value} onChange={onChange} />
    </label>
  );
};

export default Input;
