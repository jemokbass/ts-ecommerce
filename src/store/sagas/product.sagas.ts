import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  ProductsActionTypes,
  IAddProductStart,
  IDeleteProductStart,
  IProductsState,
  IFetchProducts,
  IFetchProductStart,
  IProductData,
} from "../../utils/types/products.types";
import {
  handleAddProduct,
  handleFetchProducts,
  handleDeleteProducts,
  handleFetchProduct,
} from "../../utils/helpers/product.heplers";
import { auth } from "../../utils/firebase/utils.firebase";
import { setProducts, setProduct, fetchProductsStart } from "../actions/products.actions";

export function* addProduct({
  payload: { productCategory, productName, productPrice, productThumbnail, productDescription },
}: IAddProductStart) {
  try {
    const timestamp = new Date();

    yield handleAddProduct({
      productCategory,
      productName,
      productPrice,
      productThumbnail,
      productDescription,
      productAdminUserUID: auth.currentUser?.uid,
      createdDate: timestamp,
    });
    yield put(fetchProductsStart());
  } catch (error) {
    console.log(error);
  }
}

export function* fetchProducts({ payload }: IFetchProducts) {
  try {
    const products: IProductsState = yield handleFetchProducts(payload);

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

export function* onFetchProductsStart() {
  yield takeLatest(ProductsActionTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* onAddProductStart() {
  yield takeLatest(ProductsActionTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* onDeleteProductStart() {
  yield takeLatest(ProductsActionTypes.DELETE_PRODUCTS_START, deleteProduct);
}

export function* fetchProduct({ payload }: IFetchProductStart) {
  try {
    const product: IProductData = yield handleFetchProduct(payload);

    yield put(setProduct(product));
  } catch (error) {
    console.log(error);
  }
}

export function* onFetchProductStart() {
  yield takeLatest(ProductsActionTypes.FETCH_PRODUCT_START, fetchProduct);
}

export function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart),
  ]);
}
