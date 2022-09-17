import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../utils/routes/routes";
import { useActions } from "../../hooks/useActions";

export const LogoutPage = () => {
  const navigate = useNavigate();
  const { signOutStart } = useActions();

  const logOutAction = useCallback(() => {
    signOutStart();

    return navigate(ROUTES.LOGIN);
  }, [signOutStart, navigate]);

  useEffect(() => {
    logOutAction();
  }, [logOutAction]);

  return <section className="logout-page"></section>;
};
