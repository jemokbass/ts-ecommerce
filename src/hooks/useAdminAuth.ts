import { useTypedSelector } from "./useTypedSelector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes/routes";
import { checkUserIsAdmin } from "../utils/index";

export const useAdminAuth = () => {
  const navigate = useNavigate();
  const { currentUser, loading } = useTypedSelector(state => state.user);

  useEffect(() => {
    if (!checkUserIsAdmin(currentUser) && !loading) {
      navigate(ROUTES.LOGIN);
    } // eslint-disable-next-line
  }, [currentUser, loading]);

  return checkUserIsAdmin(currentUser);
};
