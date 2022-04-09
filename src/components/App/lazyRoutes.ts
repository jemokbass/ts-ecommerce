import { lazy } from "react";

const HomePage = lazy(() =>
  import("../../pages/HomePage/HomePage").then(module => ({ default: module.HomePage }))
);
const SignUpPage = lazy(() =>
  import("../../pages/RegistrationPage/RegistrationPage").then(module => ({
    default: module.RegistrationPage,
  }))
);
const LoginPage = lazy(() =>
  import("../../pages/LoginPage/LoginPage").then(module => ({ default: module.LoginPage }))
);
const LogoutPage = lazy(() =>
  import("../../pages/LogoutPage/LogoutPage").then(module => ({ default: module.LogoutPage }))
);
const RecoveryPage = lazy(() =>
  import("../../pages/RecoveryPage/RecoveryPage").then(module => ({ default: module.RecoveryPage }))
);
const DashboardPage = lazy(() =>
  import("../../pages/DashboardPage/DashboardPage").then(module => ({ default: module.DashboardPage }))
);
const AdminPage = lazy(() =>
  import("../../pages/AdminPage/AdminPage").then(module => ({ default: module.AdminPage }))
);
const SearchPage = lazy(() =>
  import("../../pages/SearchPage/SearchPage").then(module => ({ default: module.SearchPage }))
);
const ErrorPage = lazy(() =>
  import("../../pages/ErrorPage/ErrorPage").then(module => ({ default: module.ErrorPage }))
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
};
