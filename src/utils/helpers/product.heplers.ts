import { firestore } from "../firebase/utils.firebase";
import { IProductData, ProductId } from "../types/products.types";

export const handleAddProduct = (product: IProductData) => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("products")
      .doc()
      .set(product)
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject();
      });
  });
};

export const handleFetchProducts = () => {
  return new Promise((resolve, reject) => {
    firestore
      .collection("products")
      .get()
      .then(result => {
        const productsArray = result.docs.map(doc => ({
          ...doc.data(),
          documentID: doc.id,
        }));
        resolve(productsArray);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const handleDeleteProducts = (documentID: ProductId | undefined) => {
  return new Promise<void>((resolve, reject) => {
    firestore
      .collection("products")
      .doc(documentID)
      .delete()
      .then(result => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};
