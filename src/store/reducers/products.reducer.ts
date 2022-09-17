import { IProductsState, ProductsAction, ProductsActionTypes } from "../../utils/types/products.types";

const initialState: IProductsState = {
  data: [],
  isLastPage: false,
  queryDoc: [],
  product: {},
};

export const productsReducer = (state = initialState, action: ProductsAction): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.SET_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    case ProductsActionTypes.SET_PRODUCT:
      return {
        ...state,
        product: action.payload,
      };
    default:
      return state;
  }
};
