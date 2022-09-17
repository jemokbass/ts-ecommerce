import { auth } from "../firebase/utils.firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export const handleResetPasswordAPI = (email: string): Promise<string[] | void> => {
  const config = {
    url: "http://localhost:3000/login",
  };

  return new Promise((resolve, reject) => {
    sendPasswordResetEmail(auth, email, config)
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        const error = ["Email not found. Please try again."];
        reject(error);
      });
  });
};
