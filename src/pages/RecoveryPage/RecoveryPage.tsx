import { Recovery } from "../../components/Recovery";
import { Inner } from "../../components/UI/Inner";

export const RecoveryPage = () => {
  return (
    <section className="recovery-page">
      <Inner>
        <h1 className="recovery-page__title">Recovery Password</h1>
        <Recovery />
      </Inner>
    </section>
  );
};
