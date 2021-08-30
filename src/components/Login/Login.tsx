import { FC, FormEvent } from 'react';
import { signInWithGoogle } from '../../utils/firebase/utils';

import Button from '../../components/UI/Button/Button';

const Login: FC = () => {
  const onSubmitForm = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="login" onSubmit={onSubmitForm}>
      <Button className="login__button" onClick={signInWithGoogle}>
        Sign In
      </Button>
    </form>
  );
};

export default Login;
