import { FC } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../../store/actions/cart.actions";
import { IProductData } from "../../utils/types/products.types";
import { Button } from "../UI/Button";

interface Props {
  product: IProductData;
  link: string;
}

export const Product: FC<Props> = ({ product, link }) => {
  const { productThumbnail, productName, productPrice } = product;
  const dispatch = useDispatch();

  const addToCartHandler = (data: IProductData) => {
    if (!data) return;

    dispatch(addToCart(data));
  };

  return (
    <div className="product">
      <Link to={link}>
        <img className="product__img" src={productThumbnail} alt={productName} />
      </Link>
      <div className="product__inner">
        <p className="product__title">{productName}</p>
        <p className="product__price">
          {productPrice}
          <b>$</b>
        </p>
        <Button className="product__button" onClick={() => addToCartHandler(product)}>
          Add to cart
        </Button>
      </div>
    </div>
  );
};
