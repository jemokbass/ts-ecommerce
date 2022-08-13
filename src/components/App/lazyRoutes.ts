import { lazy } from "react";

const HomePage = lazy(() =>
  import("../../pages/HomePage/HomePage").then(module => ({ default: module.HomePage }))
);
const SignUpPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage").then(module => ({
    default: module.RegistrationPage,
  }))
);
const LoginPage = lazy(() => import("../../pages/LoginPage").then(module => ({ default: module.LoginPage })));
const LogoutPage = lazy(() =>
  import("../../pages/LogoutPage").then(module => ({ default: module.LogoutPage }))
);
const RecoveryPage = lazy(() =>
  import("../../pages/RecoveryPage").then(module => ({ default: module.RecoveryPage }))
);
const DashboardPage = lazy(() =>
  import("../../pages/DashboardPage").then(module => ({ default: module.DashboardPage }))
);
const AdminPage = lazy(() => import("../../pages/AdminPage").then(module => ({ default: module.AdminPage })));
const SearchPage = lazy(() =>
  import("../../pages/SearchPage").then(module => ({ default: module.SearchPage }))
);
const ErrorPage = lazy(() => import("../../pages/ErrorPage").then(module => ({ default: module.ErrorPage })));
const ProductDetailsPage = lazy(() =>
  import("../../pages/ProductDetailsPage").then(module => ({ default: module.ProductDetailsPage }))
);

export {
  HomePage,
  SignUpPage,
  LoginPage,
  LogoutPage,
  RecoveryPage,
  DashboardPage,
  AdminPage,
  SearchPage,
  ErrorPage,
  ProductDetailsPage,
};
