import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProductsStart } from "../../store/actions/products.actions";
import { Product } from "./Product";
import "./Products.css";

export const Products: FC = () => {
  const dispatch = useDispatch();
  const { products } = useTypedSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  if (!Array.isArray(products)) return null;

  return (
    <div className="products">
      {products.length < 1 ? (
        <p>No search results</p>
      ) : (
        products.map(product =>
          !product.productThumbnail ||
          typeof !product.productPrice === undefined ||
          !product.productName ? null : (
            <Product product={product} key={product.documentID} />
          )
        )
      )}
    </div>
  );
};
