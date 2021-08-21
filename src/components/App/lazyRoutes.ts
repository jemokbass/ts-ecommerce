import { lazy } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));

export { HomePage, SignUpPage, LoginPage };
