import { FC, useState, ChangeEvent, FormEvent, useEffect } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { useHistory } from 'react-router';
import ErrorList from '../Error/ErrorList/ErrorList';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ROUTES } from '../../utils/routes/routes';

const Recovery: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [errors, setErrors] = useState<string[]>([]);
  const { push } = useHistory();
  const { resetPasswordStart, resetUserState } = useActions();
  const { resetPasswordSuccess, error } = useTypedSelector(state => state.user);

  useEffect(() => {
    if (resetPasswordSuccess) {
      setEmail('');
      resetUserState();
      push(ROUTES.LOGIN);
    }
  }, [resetPasswordSuccess, push, resetUserState]);

  useEffect(() => {
    if (Array.isArray(error) && error.length > 0) {
      setErrors(error);
    }
  }, [error]);

  const onSubmitForm = async (e: FormEvent) => {
    setErrors([]);
    e.preventDefault();

    resetPasswordStart({ email });
  };

  return (
    <form className="recovery" onSubmit={onSubmitForm}>
      <Input
        label="Email"
        name="email"
        placeholder="john@gmail.com"
        type="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      {errors.length > 0 && <ErrorList errors={errors} />}
      <Button className="recovery__button" type="submit">
        Recovery
      </Button>
    </form>
  );
};

export default Recovery;
