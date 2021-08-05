import { lazy } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('../../pages/SignUpPage/SignUpPage'));

export { HomePage, SignUpPage };
