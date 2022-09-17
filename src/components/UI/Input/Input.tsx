import { ChangeEvent, HTMLProps, useState } from "react";
import { cn } from "../../../utils/index";

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
  type?: "text" | "email" | "password" | "number";
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  step?: number;
  className?: string;
}

export const Input = ({
  label,
  type = "text",
  value,
  placeholder,
  step,
  className,
  onChange,
  ...props
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
      className={cn("input", isActive && "active", className)}
      onFocus={onFocusHandler}
      onBlur={onBlurEvent}
    >
      <span>{label}</span>
      <input
        type={type}
        value={value}
        placeholder={isActive ? placeholder : ""}
        step={step}
        autoComplete={type}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};
