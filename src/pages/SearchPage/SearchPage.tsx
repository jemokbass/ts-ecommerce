import { FC } from "react";
import { Products } from "../../components/Products";
import { Title } from "../../components/UI/Title";
import "./SearchPage.css";

export const SearchPage: FC = () => {
  return (
    <section className="search-page container">
      <Title type="h1">Browse products:</Title>
      <Products />
    </section>
  );
};
