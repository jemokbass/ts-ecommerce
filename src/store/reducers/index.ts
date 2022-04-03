import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { productsReducer } from "./products.reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
});
