import { ChangeEvent, useState } from "react";
import { cn } from "../../../utils/index";

interface Option {
  name: string;
  value: string;
}

interface Props {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  options: Option[];
  className?: string;
  defaultValue?: string;
}

export const Select = ({
  label,
  onChange,
  value,
  placeholder,
  name,
  options,
  className,
  defaultValue,
}: Props) => {
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
    <label
      className={cn("select", isActive && "active", className)}
      onFocus={onFocusHandler}
      onBlur={onBlurEvent}
    >
      <span>{label}</span>
      <select
        placeholder={isActive ? placeholder : ""}
        value={value}
        onChange={onChange}
        name={name}
        key={value}
        defaultValue={defaultValue}
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
