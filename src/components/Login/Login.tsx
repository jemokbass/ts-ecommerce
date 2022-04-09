import { FC, FormEvent, useState, ChangeEvent, useEffect } from "react";

import { Button } from "../../components/UI/Button";
import { Input } from "../UI/Input";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes/routes";

export const Login: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { currentUser } = useTypedSelector(state => state.user);
  const navigate = useNavigate();
  const { signInStart, googleSignInStart } = useActions();

  useEffect(() => {
    if (currentUser) {
      reset();
      navigate(ROUTES.DASHBOARD);
    }
  }, [currentUser, navigate]);

  const reset = (): void => {
    setEmail("");
    setPassword("");
  };

  const onSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    signInStart({ email, password });
  };

  return (
    <form className="login" onSubmit={onSubmitForm}>
      <Link className="login__link" to={ROUTES.RECOVERY}>
        Forgot Password?
      </Link>
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
      <Button className="login__button" type="submit">
        Log In
      </Button>
      <Button className="login__button" onClick={googleSignInStart} type="button">
        Sign In with Google
      </Button>
    </form>
  );
};
