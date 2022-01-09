import { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import WithAuth from '../../hoc/WithAuth';
import { ROUTES } from '../../utils/routes/routes';
import * as lazyRoutes from './lazyRoutes';
import WithAdminAuth from '../../hoc/WithAdminAuth';

const Routes: FC = () => {
  const routes = (
    <>
      <Route path={ROUTES.RECOVERY} render={() => <lazyRoutes.RecoveryPage />} />
      <Route path={ROUTES.LOGIN} render={() => <lazyRoutes.LoginPage />} />
      <Route exact path={ROUTES.HOME} render={() => <lazyRoutes.HomePage />} />
      <Route path={ROUTES.LOGOUT} render={() => <lazyRoutes.LogoutPage />} />
      <Route path={ROUTES.REGISTRATION} render={() => <lazyRoutes.SignUpPage />} />
      <Route
        path={ROUTES.DASHBOARD}
        render={() => (
          <WithAuth>
            <lazyRoutes.DashboardPage />
          </WithAuth>
        )}
      />
      <Route
        path={ROUTES.ADMIN}
        render={() => (
          <WithAdminAuth>
            <lazyRoutes.AdminPage />
          </WithAdminAuth>
        )}
      />
    </>
  );

  return (
    <Suspense fallback={<div>Load...</div>}>
      <Switch>{routes}</Switch>
    </Suspense>
  );
};

export default Routes;
