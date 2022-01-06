import { FC, FormEvent, useState, ChangeEvent, useEffect } from 'react';

import Button from '../../components/UI/Button/Button';
import Input from '../UI/Input/Input';
import { Link } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useHistory } from 'react-router';
import { ROUTES } from '../../utils/routes/routes';

const Login: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { signInSuccess } = useTypedSelector(state => state.user);
  const { push } = useHistory();
  const { signInUser, signInWithGoogle, resetAuthForm } = useActions();

  useEffect(() => {
    if (signInSuccess) {
      reset();
      resetAuthForm();
      push(ROUTES.HOME);
    }
    return () => {};
  }, [signInSuccess, push, resetAuthForm]);

  const reset = (): void => {
    setEmail('');
    setPassword('');
  };

  const onSubmitForm = async (event: FormEvent) => {
    event.preventDefault();

    signInUser({ email, password });
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
      <Button className="login__button" onClick={signInWithGoogle} type="button">
        Sign In with Google
      </Button>
    </form>
  );
};

export default Login;
