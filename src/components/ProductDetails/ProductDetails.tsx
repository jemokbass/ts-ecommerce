import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProductStart, setProduct } from "../../store/actions/products.actions";
import { Button } from "../UI/Button";
import "./ProductDetails.css";

export const ProductDetails: FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useTypedSelector(state => state.products);
  const { productName, productPrice, productThumbnail, productDescription } = product;

  useEffect(() => {
    if (id) {
      dispatch(fetchProductStart(id));
    }

    return () => {
      dispatch(setProduct({}));
    };
  }, [dispatch, id]);

  return (
    <div className="product-details">
      <img className="product-details__img" src={productThumbnail} alt={productName} />
      <h1 className="product-details__title">{productName}</h1>
      <p className="product-details__price">{`${productPrice}$`}</p>
      <Button className="product-details__button">ADD TO CART</Button>
      <div>
        <span dangerouslySetInnerHTML={{ __html: productDescription ? productDescription : "" }} />
      </div>
    </div>
  );
};
