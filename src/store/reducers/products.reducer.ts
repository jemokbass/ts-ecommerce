import { IProductsState, ProductsAction, ProductsActionTypes } from "../../utils/types/products.types";

const initialState: IProductsState = {
  products: [],
};

export const productsReducer = (state = initialState, action: ProductsAction): IProductsState => {
  switch (action.type) {
    case ProductsActionTypes.SET_PRODUCT:
      return { ...state, products: action.payload };

    default:
      return state;
  }
};
