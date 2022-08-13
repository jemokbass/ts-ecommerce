import {
  ISetProducts,
  ProductId,
  IDeleteProductStart,
  IFilters,
  IProductsState,
  IProductData,
  IAddProductStart,
  ProductsActionTypes,
  IFetchProductsStart,
  IFetchProductStart,
  ISetProduct,
} from "../../utils/types/products.types";

export const addProductsStart = (productData: IProductData): IAddProductStart => ({
  type: ProductsActionTypes.ADD_NEW_PRODUCT_START,
  payload: productData,
});

export const fetchProductsStart = (filters: IFilters = {}): IFetchProductsStart => ({
  type: ProductsActionTypes.FETCH_PRODUCTS_START,
  payload: filters,
});

export const fetchProductStart = (id: string): IFetchProductStart => ({
  type: ProductsActionTypes.FETCH_PRODUCT_START,
  payload: id,
});

export const setProducts = (products: IProductsState): ISetProducts => ({
  type: ProductsActionTypes.SET_PRODUCTS,
  payload: products,
});

export const setProduct = (product: IProductData): ISetProduct => ({
  type: ProductsActionTypes.SET_PRODUCT,
  payload: product,
});

export const deleteProductsStart = (productId: ProductId | undefined): IDeleteProductStart => ({
  type: ProductsActionTypes.DELETE_PRODUCTS_START,
  payload: productId,
});
