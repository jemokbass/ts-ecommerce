import { CartActionTypes, IAddToCart, IReduceCartItem, IRemoveCartItem } from "../../utils/types/cart.types";
import { IProductData } from "../../utils/types/products.types";

export const addToCart = (payload: IProductData): IAddToCart => ({
  type: CartActionTypes.ADD_TO_CART,
  payload,
});

export const removeCartItem = (payload: IProductData): IRemoveCartItem => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload,
});

export const reduceCartItem = (payload: IProductData): IReduceCartItem => ({
  type: CartActionTypes.REDUCE_CART_ITEM,
  payload,
});
