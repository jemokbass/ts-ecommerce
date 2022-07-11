import { IProductsState, ProductsAction, ProductsActionTypes } from "../../utils/types/products.types";

const initialState: IProductsState = {
  data: [],
  isLastPage: false,
  queryDoc: [],
};

export const productsReducer = (state = initialState, action: ProductsAction): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.SET_PRODUCT:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
