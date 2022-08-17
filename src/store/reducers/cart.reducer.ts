import { handleAddToCart } from "../../utils/helpers/cart.helpers";
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
    default:
      return state;
  }
};
