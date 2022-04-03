import { FC, Suspense } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import WithAuth from "../../hoc/WithAuth";
import { ROUTES } from "../../utils/routes/routes";
import * as lazyRoutes from "./lazyRoutes";
import WithAdminAuth from "../../hoc/WithAdminAuth";
import Aside from "../Aside/Aside";

const Routes: FC = () => {
  const routes = (
    <>
      <Route path={ROUTES.HOME} element={<lazyRoutes.HomePage />} />
      <Route path={ROUTES.RECOVERY} element={<lazyRoutes.RecoveryPage />} />
      <Route path={ROUTES.LOGIN} element={<lazyRoutes.LoginPage />} />
      <Route path={ROUTES.LOGOUT} element={<lazyRoutes.LogoutPage />} />
      <Route path={ROUTES.REGISTRATION} element={<lazyRoutes.SignUpPage />} />
      <Route
        path={ROUTES.DASHBOARD}
        element={
          <WithAuth>
            <lazyRoutes.DashboardPage />
          </WithAuth>
        }
      />
      <Route
        path={ROUTES.ADMIN}
        element={
          <WithAdminAuth>
            <Aside />
            <lazyRoutes.AdminPage />
          </WithAdminAuth>
        }
      />

      <Route path={"*"} element={<div>Error page</div>} />
    </>
  );

  return (
    <Suspense fallback={<div>Load...</div>}>
      <Switch>{routes}</Switch>
    </Suspense>
  );
};

export default Routes;
