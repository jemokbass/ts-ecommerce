import { FC, FormEvent } from 'react';
import Button from '../../components/UI/Button/Button';
import Inner from '../../components/UI/Inner/Inner';
import { signInWithGoogle } from '../../firebase/utils';

const LoginPage: FC = () => {
  const onSubmitForm = async (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <section className="login-page">
      <Inner>
        <h1 className="login-page__title">Login</h1>
        <form onSubmit={onSubmitForm}>
          <Button className="login-page__button" onClick={signInWithGoogle}>
            Sign In
          </Button>
        </form>
      </Inner>
    </section>
  );
};

export default LoginPage;
