import { lazy } from "react";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const SignUpPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const LogoutPage = lazy(() => import("../../pages/LogoutPage/LogoutPage"));
const RecoveryPage = lazy(() => import("../../pages/RecoveryPage/RecoveryPage"));
const DashboardPage = lazy(() => import("../../pages/DashboardPage/DashboardPage"));
const AdminPage = lazy(() => import("../../pages/AdminPage/AdminPage"));
const SearchPage = lazy(() => import("../../pages/SearchPage/SearchPage"));
const ErrorPage = lazy(() => import("../../pages/ErrorPage/ErrorPage"));

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
