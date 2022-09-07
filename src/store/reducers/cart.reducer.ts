import {
  handleAddToCart,
  handleReduceCartItem,
  handleRemoveCartItem,
} from "../../utils/helpers/cart.helpers";
import { ICartState, CartAction, CartActionTypes } from "../../utils/types/cart.types";

const initialState: ICartState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action: CartAction): ICartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        cartItems: handleAddToCart({ prevCartItems: state.cartItems, nextCartItem: action.payload }),
      };
    case CartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: handleRemoveCartItem({ prevCartItems: state.cartItems, nextCartItem: action.payload }),
      };
    case CartActionTypes.REDUCE_CART_ITEM:
      return {
        ...state,
        cartItems: handleReduceCartItem({ prevCartItems: state.cartItems, reduceCartItem: action.payload }),
      };
    default:
      return state;
  }
};
