import { CartActionTypes, IAddToCart } from "../../utils/types/cart.types";
import { IProductData } from "../../utils/types/products.types";

export const addToCart = (payload: IProductData): IAddToCart => ({
  type: CartActionTypes.ADD_TO_CART,
  payload,
});
