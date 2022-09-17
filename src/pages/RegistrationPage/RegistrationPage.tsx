import { Registration } from "../../components/Registration";
import { Inner } from "../../components/UI/Inner";

export const RegistrationPage = () => {
  return (
    <section className="registration-page">
      <Inner>
        <h1 className="registration-page__title">Registration</h1>
        <Registration />
      </Inner>
    </section>
  );
};
