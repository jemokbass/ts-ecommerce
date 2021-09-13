import { lazy } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const LogoutPage = lazy(() => import('../../pages/LogoutPage/LogoutPage'));
const RecoveryPage = lazy(() => import('../../pages/RecoveryPage/RecoveryPage'));

export { HomePage, SignUpPage, LoginPage, LogoutPage, RecoveryPage };
