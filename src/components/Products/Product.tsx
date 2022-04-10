import { FC } from "react";
import { IProductData } from "../../utils/types/products.types";

interface Props {
  product: IProductData;
}

export const Product: FC<Props> = ({ product }) => {
  return (
    <div className="product">
      <p>{product.productName}</p>
      <p>{product.productPrice}</p>
    </div>
  );
};
