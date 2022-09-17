import { Login } from "../../components/Login";
import { Inner } from "../../components/UI/Inner";

export const LoginPage = () => {
  return (
    <section className="login-page">
      <Inner>
        <h1 className="login-page__title">Login</h1>
        <Login />
      </Inner>
    </section>
  );
};
