import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { firebaseConfig } from "./config.firebase";
import { ICurrentUser } from "../types/user.types";

initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

export const GoogleProvider = new GoogleAuthProvider();
GoogleProvider.setCustomParameters({ prompt: "select_account" });

export const handleUserProfile = async ({ userAuth, additionalData }: any) => {
  if (!userAuth) return;
  const { uid } = userAuth;
  const userRef = doc(firestore, `users/${uid}`);
  const snapshot = await getDoc(userRef);

  if (!snapshot.exists()) {
    const { displayName, email } = userAuth;
    const timestamp = new Date();
    const userRoles = ["user"];

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdDate: timestamp,
        userRoles,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }

  return userRef;
};

export const getCurrentUser = (): Promise<ICurrentUser | null | {}> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
