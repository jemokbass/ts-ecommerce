import { FC, Suspense } from "react";
import { Route, Routes as Switch } from "react-router-dom";
import { WithAuth } from "../../hoc";
import { ROUTES } from "../../utils/routes/routes";
import * as lazyRoutes from "./lazyRoutes";
import { WithAdminAuth } from "../../hoc";
import { Aside } from "../Aside";

export const Routes: FC = () => {
  const routes = (
    <>
      <Route
        path={ROUTES.PAYMENT}
        element={
          <WithAuth>
            <lazyRoutes.PaymentPage />
          </WithAuth>
        }
      />
      <Route path={ROUTES.CART} element={<lazyRoutes.CartPage />} />
      <Route path={ROUTES.HOME} element={<lazyRoutes.HomePage />} />
      <Route path={ROUTES.RECOVERY} element={<lazyRoutes.RecoveryPage />} />
      <Route path={ROUTES.LOGIN} element={<lazyRoutes.LoginPage />} />
      <Route path={ROUTES.LOGOUT} element={<lazyRoutes.LogoutPage />} />
      <Route path={ROUTES.REGISTRATION} element={<lazyRoutes.SignUpPage />} />
      <Route path={ROUTES.PRODUCT_DETAILS} element={<lazyRoutes.ProductDetailsPage />} />
      <Route path={ROUTES.SEARCH} element={<lazyRoutes.SearchPage />} />
      <Route path={ROUTES.SEARCH_TYPE} element={<lazyRoutes.SearchPage />} />
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
      <Route path={"*"} element={<lazyRoutes.ErrorPage />} />
    </>
  );

  return (
    <Suspense fallback={<div>Load...</div>}>
      <Switch>{routes}</Switch>
    </Suspense>
  );
};
