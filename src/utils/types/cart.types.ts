import { IProductData } from "./products.types";

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
  REMOVE_CART_ITEM = "REMOVE_CART_ITEM",
  REDUCE_CART_ITEM = "REDUCE_CART_ITEM",
}

export type CartItem = IProductData;

export interface IAddToCart {
  type: CartActionTypes.ADD_TO_CART;
  payload: CartItem;
}

export interface IRemoveCartItem {
  type: CartActionTypes.REMOVE_CART_ITEM;
  payload: CartItem;
}
export interface IReduceCartItem {
  type: CartActionTypes.REDUCE_CART_ITEM;
  payload: CartItem;
}

export interface ICartState {
  cartItems: CartItem[];
}

export type CartAction = IAddToCart | IRemoveCartItem | IReduceCartItem;
