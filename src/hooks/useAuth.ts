import { useTypedSelector } from "./useTypedSelector";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/routes/routes";

export const useAuth = () => {
  const navigate = useNavigate();
  const { currentUser, loading } = useTypedSelector(state => state.user);

  useEffect(() => {
    if (!currentUser && !loading) {
      navigate(ROUTES.LOGIN);
    }
    // eslint-disable-next-line
  }, [currentUser, loading]);

  return currentUser;
};
