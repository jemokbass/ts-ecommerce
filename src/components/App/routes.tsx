import { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ROUTES } from '../../utils/routes/routes';
import * as lazyRoutes from './lazyRoutes';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Routes: FC = () => {
  const { currentUser } = useTypedSelector(state => state.user);

  let routes = (
    <>
      <Route exact path="/" component={lazyRoutes.HomePage} />
      <Route path={ROUTES.REGISTRATION} component={lazyRoutes.SignUpPage} />
      <Route path={ROUTES.LOGIN} component={lazyRoutes.LoginPage} />
      <Route path={ROUTES.RECOVERY} component={lazyRoutes.RecoveryPage} />
    </>
  );

  if (currentUser) {
    routes = (
      <>
        <Route exact path="/" component={lazyRoutes.HomePage} />
        <Route path={ROUTES.LOGOUT} component={lazyRoutes.LogoutPage} />
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
