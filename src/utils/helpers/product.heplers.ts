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

export const handleFetchProducts = ({ filterType, startAfterDoc, persistProducts = [] }: IFilters) => {
  return new Promise((resolve, reject) => {
    const pageSize = 6;
    let ref = firestore.collection("products").orderBy("createdDate").limit(pageSize);

    if (filterType) ref = ref.where("productCategory", "==", filterType);
    if (startAfterDoc) ref = ref.startAfter(startAfterDoc);

    ref
      .get()
      .then(result => {
        const totalCount = result.size;
        const data = [
          ...persistProducts,
          ...result.docs.map(doc => ({
            ...doc.data(),
            documentID: doc.id,
          })),
        ];

        resolve({ data, queryDoc: result.docs[totalCount - 1], isLastPage: totalCount < 1 });
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
