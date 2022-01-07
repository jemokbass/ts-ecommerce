import { auth } from "../firebase/utils.firebase";

export const handleResetPasswordAPI = (
  email: string
): Promise<string[] | void> => {
  const config = {
    url: "http://localhost:3000/login",
  };

  return new Promise((resolve, reject) => {
    auth
      .sendPasswordResetEmail(email, config)
      .then((result) => {
        resolve(result);
      })
      .catch((err) => {
        const error = ["Email not found. Please try again."];
        reject(error);
      });
  });
};
