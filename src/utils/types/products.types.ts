export enum ProductsActionTypes {
  ADD_NEW_PRODUCT_START = "ADD_NEW_PRODUCT_START",
  FETCH_PRODUCT_START = "FETCH_PRODUCT_START",
  SET_PRODUCT = "SET_PRODUCT",
  DELETE_PRODUCTS_START = "DELETE_PRODUCTS_START",
}

export type ProductId = string;

export type ProductArray = IProductData[];

export interface IFilters {
  filterType?: string;
  startAfterDoc?: any[];
  persistProducts?: any[];
}

export interface IProductData {
  productCategory: string;
  productName: string;
  productThumbnail: string;
  productPrice: number;
  productAdminUserUID?: string;
  createdDate?: Date;
  documentID?: string;
}

export interface IProductsState {
  data: ProductArray;
  queryDoc: any[];
  isLastPage: boolean;
}

export interface IAddProductStart {
  type: ProductsActionTypes.ADD_NEW_PRODUCT_START;
  payload: IProductData;
}

export interface IFetchProductStart {
  type: ProductsActionTypes.FETCH_PRODUCT_START;
  payload: IFilters;
}

export interface IFetchProduct {
  type: ProductsActionTypes.FETCH_PRODUCT_START;
  payload: IFilters;
}

export interface ISetProduct {
  type: ProductsActionTypes.SET_PRODUCT;
  payload: IProductsState;
}

export interface IDeleteProductStart {
  type: ProductsActionTypes.DELETE_PRODUCTS_START;
  payload: ProductId | undefined;
}

export type ProductsAction = IAddProductStart | IFetchProductStart | ISetProduct | IDeleteProductStart;
