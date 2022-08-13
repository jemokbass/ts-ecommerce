import { FC } from "react";
import { ProductDetails } from "../../components/ProductDetails/ProductDetails";
import "./ProductDetailsPage.css";

export const ProductDetailsPage: FC = () => {
  return (
    <section className="product-details-page">
      <ProductDetails />
    </section>
  );
};
