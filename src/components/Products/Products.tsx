import { ChangeEvent, FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProductsStart } from "../../store/actions/products.actions";
import { Select } from "../UI/Select";
import { Product } from "./Product";
import "./Products.css";

export const Products: FC = () => {
  const navigate = useNavigate();
  const { filterType } = useParams();
  const dispatch = useDispatch();
  const { products } = useTypedSelector(state => state.products);
  const options = [
    { value: "", name: "Show all" },
    { value: "mens", name: "Mens" },
    { value: "womens", name: "Womens" },
  ];

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [dispatch, filterType]);

  if (!Array.isArray(products)) return null;

  const handleFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    navigate(`/search/${e.target.value}`);
  };

  return (
    <div className="products">
      <Select
        className="products__select"
        options={options}
        onChange={handleFilter}
        defaultValue={filterType}
      />
      <div className="products__inner">
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
    </div>
  );
};
