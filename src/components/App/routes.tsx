import { FC, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import * as lazyRoutes from './lazyRoutes';

const Routes: FC = () => {
  const routes = (
    <>
      <Route exact path="/" component={lazyRoutes.HomePage} />
      <Route exact path="/sign-up" component={lazyRoutes.SignUpPage} />
    </>
  );

  return (
    <Suspense fallback={<div>Load...</div>}>
      <Switch>{routes}</Switch>
    </Suspense>
  );
};

export default Routes;
