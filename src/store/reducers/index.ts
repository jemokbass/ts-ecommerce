import { combineReducers } from "redux";
import { userReducer } from "./user.reducer";
import { productsReducer } from "./products.reducer";
import { cartReducer } from "./cart.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const rootReducer = combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
});

const configStorage = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

export const reducer = persistReducer(configStorage, rootReducer);
