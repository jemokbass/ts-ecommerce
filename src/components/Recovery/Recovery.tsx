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
  const { recoveryPassword, resetAuthForm } = useActions();
  const { recoverySuccess, recoveryError } = useTypedSelector(state => state.user);

  useEffect(() => {
    if (recoverySuccess) {
      resetAuthForm();
      push(ROUTES.LOGIN);
    }
  }, [recoverySuccess, push, resetAuthForm]);

  useEffect(() => {
    if (Array.isArray(recoveryError) && recoveryError.length > 0) {
      setErrors(recoveryError);
    }
  }, [recoveryError]);

  const onSubmitForm = async (e: FormEvent) => {
    setErrors([]);
    e.preventDefault();

    recoveryPassword({ email });
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
