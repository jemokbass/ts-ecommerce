import { FC } from "react";
import { Link } from "react-router-dom";
import { IProductData } from "../../utils/types/products.types";
import { Button } from "../UI/Button";

interface Props {
  product: IProductData;
  link: string;
}

export const Product: FC<Props> = ({ product, link }) => {
  return (
    <div className="product">
      <Link to={link}>
        <img className="product__img" src={product.productThumbnail} alt={product.productName + " photo"} />
      </Link>
      <div className="product__inner">
        <p className="product__title">{product.productName}</p>
        <p className="product__price">
          {product.productPrice}
          <b>$</b>
        </p>
        <Button className="product__button">Add to cart</Button>
      </div>
    </div>
  );
};
