import { FC, ChangeEvent, useState } from "react";

interface Props {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  options: any[];
}

export const Select: FC<Props> = ({ label, onChange, value, placeholder, name, options }) => {
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
    <label className={`select${isActive ? " active" : ""}`} onFocus={onFocusHandler} onBlur={onBlurEvent}>
      <span>{label}</span>
      <select
        placeholder={isActive ? placeholder : ""}
        value={value}
        onChange={onChange}
        name={name}
        key={value}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </label>
  );
};
