import { FC } from "react";
import Title from "../../components/UI/Title/Title";
import "./ErrorPage.css";

const ErrorPage: FC = () => {
  return (
    <section className="error-page">
      <Title type="h2" className="error-page__title">
        Error 404
      </Title>
    </section>
  );
};

export default ErrorPage;
