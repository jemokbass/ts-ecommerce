import { FC } from 'react';
import Registration from '../../components/Registration/Registration';
import Inner from '../../components/UI/Inner/Inner';

const RegistrationPage: FC = () => {
  return (
    <section className="registration-page">
      <Inner>
        <h1 className="registration-page__title">Registration</h1>
        <Registration />
      </Inner>
    </section>
  );
};

export default RegistrationPage;
