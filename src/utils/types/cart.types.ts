import { IProductData } from "./products.types";

export enum CartActionTypes {
  ADD_TO_CART = "ADD_TO_CART",
}

export type CartItem = IProductData;

export interface IAddToCart {
  type: CartActionTypes.ADD_TO_CART;
  payload: CartItem;
}

export interface ICartState {
  cartItems: CartItem[];
}

export type CartAction = IAddToCart;
