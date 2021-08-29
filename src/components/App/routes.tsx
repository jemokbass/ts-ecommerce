import { FC, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { IAuthState } from '../../utils/types/auth';
import * as lazyRoutes from './lazyRoutes';

const Routes: FC<IAuthState> = ({ currentUser }) => {
  let routes = (
    <>
      <Route exact path="/" component={lazyRoutes.HomePage} />
      <Route exact path="/registration" component={lazyRoutes.SignUpPage} />
      <Route exact path="/login" component={lazyRoutes.LoginPage} />
      <Redirect to="/" />
    </>
  );

  if (currentUser) {
    routes = (
      <>
        <Route exact path="/" component={lazyRoutes.HomePage} />
        <Route exact path="/logout" component={lazyRoutes.LogoutPage} />
        <Redirect to="/" />
      </>
    );
  }

  return (
    <Suspense fallback={<div>Load...</div>}>
      <Switch>{routes}</Switch>
    </Suspense>
  );
};

export default Routes;
