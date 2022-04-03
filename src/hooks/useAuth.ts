import { useTypedSelector } from "./useTypedSelector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes/routes";

export const useAuth = () => {
  const navigate = useNavigate();
  const { currentUser } = useTypedSelector(state => state.user);

  useEffect(() => {
    if (!currentUser) {
      navigate(ROUTES.LOGIN);
    } // eslint-disable-next-line
  }, [currentUser]);

  return currentUser;
};
