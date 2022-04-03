import { useTypedSelector } from "./useTypedSelector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes/routes";
import { checkUserIsAdmin } from "../utils/index";

export const useAdminAuth = () => {
  const navigate = useNavigate();
  const { currentUser } = useTypedSelector(state => state.user);

  useEffect(() => {
    if (!checkUserIsAdmin(currentUser)) {
      navigate(ROUTES.LOGIN);
    } // eslint-disable-next-line
  }, [currentUser]);

  return checkUserIsAdmin(currentUser);
};
