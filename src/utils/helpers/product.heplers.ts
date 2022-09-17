import { firestore } from "../firebase/utils.firebase";
import { IProductData, ProductId, IFilters } from "../types/products.types";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  orderBy,
  limit,
  query,
  where,
  startAfter,
  deleteDoc,
} from "firebase/firestore";

export const handleAddProduct = (product: IProductData) => {
  return new Promise((resolve, reject) => {
    const collect = collection(firestore, "products");
    const collectDoc = doc(collect);

    setDoc(collectDoc, product)
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
    let ref = query(collection(firestore, "products"), orderBy("createdDate"), limit(pageSize));

    if (filterType) ref = query(ref, where("productCategory", "==", filterType));
    if (startAfterDoc) ref = query(ref, startAfter(startAfterDoc));

    getDocs(ref)
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
    const collect = collection(firestore, "products");
    const newDoc = doc(collect, documentID);

    deleteDoc(newDoc)
      .then(result => {
        resolve();
      })
      .catch(err => {
        reject(err);
      });
  });
};

export const handleFetchProduct = (id: string) => {
  return new Promise((resolve, reject) => {
    const collect = collection(firestore, "products");
    const newDoc = doc(collect, id);

    getDoc(newDoc)
      .then(result => {
        if (result.exists()) {
          resolve({ ...result.data() });
        }
      })
      .catch(err => {
        reject(err);
      });
  });
};
