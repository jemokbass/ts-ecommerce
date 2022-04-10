import { FC } from "react";
import { IProductData } from "../../utils/types/products.types";

interface Props {
  product: IProductData;
}

export const Product: FC<Props> = ({ product }) => {
  return (
    <div className="product">
      <img className="product__img" src={product.productThumbnail} alt={product.productName + " photo"} />
      <div className="product__inner">
        <p className="product__title">{product.productName}</p>
        <p className="product__price">
          {product.productPrice}
          <b>$</b>
        </p>
      </div>
    </div>
  );
};
