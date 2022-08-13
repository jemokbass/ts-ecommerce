import { ChangeEvent, FC, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useScrollToEnd } from "../../hooks/useScrollToEnd";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchProductsStart } from "../../store/actions/products.actions";
import { LoadMore } from "../LoadMore";
import { Select } from "../UI/Select";
import { Product } from "./Product";
import "./Products.css";

export const Products: FC = () => {
  const navigate = useNavigate();
  const { filterType } = useParams();
  const dispatch = useDispatch();
  const { data, isLastPage, queryDoc } = useTypedSelector(state => state.products);
  const options = [
    { value: "", name: "Show all" },
    { value: "mens", name: "Mens" },
    { value: "womens", name: "Womens" },
  ];

  const handleLoadMore = useCallback(() => {
    dispatch(fetchProductsStart({ filterType, startAfterDoc: queryDoc, persistProducts: data }));
  }, [dispatch, filterType, queryDoc, data]);

  useEffect(() => {
    dispatch(fetchProductsStart({ filterType }));
  }, [dispatch, filterType]);

  useScrollToEnd(handleLoadMore, isLastPage);

  if (!Array.isArray(data)) return null;

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
        {data.length < 1 ? (
          <p>No search results</p>
        ) : (
          data.map(product =>
            !product.productThumbnail ||
            typeof !product.productPrice === undefined ||
            !product.productName ? null : (
              <Product
                link={product.documentID ? `/product/${product.documentID}` : ""}
                product={product}
                key={product.documentID}
              />
            )
          )
        )}
      </div>
      {!isLastPage && <LoadMore onLoadMore={handleLoadMore} />}
    </div>
  );
};
