import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { addToCart } from "../../store/actions/cart.actions";
import { fetchProductStart, setProduct } from "../../store/actions/products.actions";
import { IProductData } from "../../utils/types/products.types";
import { Button } from "../UI/Button";
import "./ProductDetails.css";

export const ProductDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useTypedSelector(state => state.products);
  const { productName, productPrice, productThumbnail, productDescription } = product;

  const addToCartHandler = (data: IProductData) => {
    if (!data) return;

    dispatch(addToCart(data));
  };

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
      <Button className="product-details__button" onClick={() => addToCartHandler(product)}>
        ADD TO CART
      </Button>
      <div>
        <span dangerouslySetInnerHTML={{ __html: productDescription ? productDescription : "" }} />
      </div>
    </div>
  );
};
