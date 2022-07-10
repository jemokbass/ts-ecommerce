import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  ProductsActionTypes,
  IAddProductStart,
  ProductArray,
  IDeleteProductStart,
} from "../../utils/types/products.types";
import {
  handleAddProduct,
  handleFetchProducts,
  handleDeleteProducts,
} from "../../utils/helpers/product.heplers";
import { auth } from "../../utils/firebase/utils.firebase";
import { setProducts, fetchProductsStart } from "../actions/products.actions";
import { IFetchProfuct } from "../../utils/types/products.types";

export function* addProduct({
  payload: { productCategory, productName, productPrice, productThumbnail },
}: IAddProductStart) {
  try {
    const timestamp = new Date();

    yield handleAddProduct({
      productCategory,
      productName,
      productPrice,
      productThumbnail,
      productAdminUserUID: auth.currentUser?.uid,
      createdDate: timestamp,
    });
    yield put(fetchProductsStart());
  } catch (error) {
    console.log(error);
  }
}

export function* fetchProduct({ payload: { filterType } }: IFetchProfuct) {
  try {
    const products: ProductArray = yield handleFetchProducts({ filterType: filterType });

    yield put(setProducts(products));
  } catch (error) {
    console.log(error);
  }
}

export function* deleteProduct({ payload }: IDeleteProductStart) {
  try {
    yield handleDeleteProducts(payload);
    yield put(fetchProductsStart());
  } catch (error) {
    console.log(error);
  }
}

export function* onFetchProductStart() {
  yield takeLatest(ProductsActionTypes.FETCH_PRODUCT_START, fetchProduct);
}

export function* onAddProductStart() {
  yield takeLatest(ProductsActionTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* onDeleteProductStart() {
  yield takeLatest(ProductsActionTypes.DELETE_PRODUCTS_START, deleteProduct);
}

export function* productsSagas() {
  yield all([call(onAddProductStart), call(onFetchProductStart), call(onDeleteProductStart)]);
}
