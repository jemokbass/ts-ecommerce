import { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import ErrorList from '../Error/ErrorList/ErrorList';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useHistory } from 'react-router';
import { ROUTES } from '../../utils/routes/routes';

const Registration: FC = () => {
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const { push } = useHistory();
  const { signUpSuccess, signUpError } = useTypedSelector(state => state.user);
  const { signUpUser, resetAuthForm } = useActions();

  useEffect(() => {
    if (signUpSuccess) {
      reset();
      resetAuthForm();
      push(ROUTES.HOME);
    }
  }, [signUpSuccess, push, resetAuthForm]);

  useEffect(() => {
    if (Array.isArray(signUpError) && signUpError.length > 0) {
      setErrors(signUpError);
    }
  }, [signUpError]);

  const reset = (): void => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleFormSubmit = async (e: FormEvent) => {
    setErrors([]);
    e.preventDefault();

    signUpUser({
      displayName,
      email,
      password,
      confirmPassword,
    });
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

export default Registration;
