import { FC, useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Button } from "../UI/Button";
import { Input } from "../UI/Input";
import { ErrorList } from "../Error/ErrorList";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes/routes";

export const Registration: FC = () => {
  const [displayName, setDisplayName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [errors, setErrors] = useState<string[]>([]);
  const navigate = useNavigate();
  const { currentUser, error } = useTypedSelector(state => state.user);
  const { signUpStart } = useActions();

  useEffect(() => {
    if (currentUser) {
      reset();
      navigate(ROUTES.HOME);
    }
  }, [currentUser, navigate]);

  useEffect(() => {
    if (Array.isArray(error) && error.length > 0) {
      setErrors(error);
    }
  }, [error]);

  const reset = (): void => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleFormSubmit = async (e: FormEvent) => {
    setErrors([]);
    e.preventDefault();

    signUpStart({ displayName, email, password, confirmPassword });
  };

  return (
    <form className="registration" onSubmit={handleFormSubmit}>
      <Input
        label="Full Name"
        type="text"
        name="displayName"
        placeholder="John"
        value={displayName}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setDisplayName(e.target.value)}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="john@gmail.com"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <Input
        label="Password"
        type="password"
        name="password"
        placeholder="da@3#zxe"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <Input
        label="Confirm Password"
        type="password"
        name="confirmPassword"
        placeholder="da@3#zxe"
        value={confirmPassword}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setConfirmPassword(e.target.value)}
      />
      {errors.length > 0 && <ErrorList errors={errors} />}
      <Button className="registration__button" type="submit">
        Sign Up
      </Button>
    </form>
  );
};
