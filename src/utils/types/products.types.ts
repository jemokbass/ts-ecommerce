export enum ProductsActionTypes {
  ADD_NEW_PRODUCT_START = "ADD_NEW_PRODUCT_START",
  FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START",
  SET_PRODUCTS = "SET_PRODUCTS",
  SET_PRODUCT = "SET_PRODUCT",
  DELETE_PRODUCTS_START = "DELETE_PRODUCTS_START",
  FETCH_PRODUCT_START = "FETCH_PRODUCT_START",
}

export type ProductId = string;

export type ProductArray = IProductData[];

export interface IFilters {
  filterType?: string;
  startAfterDoc?: any[];
  persistProducts?: any[];
}

export interface IProductData {
  productCategory?: string;
  productName?: string;
  productThumbnail?: string;
  productPrice?: number;
  productDescription?: string;
  productAdminUserUID?: string;
  createdDate?: Date;
  documentID?: string;
  quantity?: number;
}

export interface IProductsState {
  data: ProductArray;
  queryDoc: any[];
  isLastPage: boolean;
  product: IProductData;
}

export interface IAddProductStart {
  type: ProductsActionTypes.ADD_NEW_PRODUCT_START;
  payload: IProductData;
}

export interface IFetchProductsStart {
  type: ProductsActionTypes.FETCH_PRODUCTS_START;
  payload: IFilters;
}

export interface IFetchProducts {
  type: ProductsActionTypes.FETCH_PRODUCTS_START;
  payload: IFilters;
}
export interface IFetchProductStart {
  type: ProductsActionTypes.FETCH_PRODUCT_START;
  payload: string;
}

export interface ISetProducts {
  type: ProductsActionTypes.SET_PRODUCTS;
  payload: IProductsState;
}
export interface ISetProduct {
  type: ProductsActionTypes.SET_PRODUCT;
  payload: IProductData;
}

export interface IDeleteProductStart {
  type: ProductsActionTypes.DELETE_PRODUCTS_START;
  payload: ProductId | undefined;
}

export type ProductsAction =
  | IAddProductStart
  | IFetchProductsStart
  | IFetchProductStart
  | ISetProducts
  | IDeleteProductStart
  | ISetProduct;
