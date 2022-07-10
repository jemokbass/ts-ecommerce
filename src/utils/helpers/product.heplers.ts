import { firestore } from "../firebase/utils.firebase";
import { IProductData, ProductId, IFilters } from "../types/products.types";

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

export const handleFetchProducts = ({ filterType }: IFilters) => {
  return new Promise((resolve, reject) => {
    let ref = firestore.collection("products").orderBy("createdDate");

    if (filterType) ref = ref.where("productCategory", "==", filterType);

    ref
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
