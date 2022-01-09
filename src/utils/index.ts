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
