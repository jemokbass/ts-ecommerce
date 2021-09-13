import { FC } from 'react';
import Recovery from '../../components/Recovery/Recovery';
import Inner from '../../components/UI/Inner/Inner';

const RecoveryPage: FC = () => {
  return (
    <section className="recovery-page">
      <Inner>
        <h1 className="recovery-page__title">Recovery Password</h1>
        <Recovery />
      </Inner>
    </section>
  );
};

export default RecoveryPage;
