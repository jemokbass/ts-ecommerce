import { FC } from 'react';

import Login from '../../components/Login/Login';
import Inner from '../../components/UI/Inner/Inner';

const LoginPage: FC = () => {
  return (
    <section className="login-page">
      <Inner>
        <h1 className="login-page__title">Login</h1>
        <Login />
      </Inner>
    </section>
  );
};

export default LoginPage;
