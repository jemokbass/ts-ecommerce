import axios from "axios";
import { ICurrentUser } from "./types/user.types";

export const checkUserIsAdmin = (currentUser: ICurrentUser | null) => {
  let isAdmin = false;

  if (currentUser) {
    const { userRoles } = currentUser;

    if (!currentUser || Array.isArray(userRoles)) {
      isAdmin = false;
    }
    if (currentUser.userRoles.includes("admin")) {
      isAdmin = true;
    }
  }

  return isAdmin;
};

export const cn = (...classNames: (string | undefined | boolean)[]) => {
  return `${classNames
    .map(className => `${className && typeof className === "string" ? className : ""}`)
    .filter(element => element)
    .join(" ")}`;
};

export const apiInstance = axios.create({ baseURL: "http://localhost:5001/ts-ecommerce/us-central1/api" });
