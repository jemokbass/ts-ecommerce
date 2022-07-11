import {
  ISetProduct,
  ProductId,
  IDeleteProductStart,
  IFilters,
  IProductsState,
} from "../../utils/types/products.types";
import {
  IProductData,
  IAddProductStart,
  ProductsActionTypes,
  IFetchProductStart,
} from "../../utils/types/products.types";

export const addProductsStart = (productData: IProductData): IAddProductStart => ({
  type: ProductsActionTypes.ADD_NEW_PRODUCT_START,
  payload: productData,
});

export const fetchProductsStart = (filters: IFilters = {}): IFetchProductStart => ({
  type: ProductsActionTypes.FETCH_PRODUCT_START,
  payload: filters,
});

export const setProducts = (products: IProductsState): ISetProduct => ({
  type: ProductsActionTypes.SET_PRODUCT,
  payload: products,
});

export const deleteProductsStart = (productId: ProductId | undefined): IDeleteProductStart => ({
  type: ProductsActionTypes.DELETE_PRODUCTS_START,
  payload: productId,
});
