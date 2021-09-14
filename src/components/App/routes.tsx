import { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { IUserState } from '../../utils/types/user.types';
import * as lazyRoutes from './lazyRoutes';

const Routes: FC<IUserState> = ({ currentUser }) => {
  let routes = (
    <>
      <Route exact path="/" component={lazyRoutes.HomePage} />
      <Route path="/registration" component={lazyRoutes.SignUpPage} />
      <Route path="/login" component={lazyRoutes.LoginPage} />
      <Route path="/recovery" component={lazyRoutes.RecoveryPage} />
    </>
  );

  if (currentUser) {
    routes = (
      <>
        <Route exact path="/" component={lazyRoutes.HomePage} />
        <Route path="/logout" component={lazyRoutes.LogoutPage} />
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
