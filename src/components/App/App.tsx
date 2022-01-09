import { FC, useEffect } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routes from './routes';
import { useActions } from '../../hooks/useActions';
import AdminToolbar from '../AdminToolbar/AdminToolbar';
import WithAdminAuth from '../../hoc/WithAdminAuth';

const App: FC = () => {
  const { checkUserSession } = useActions();

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="app">
      <WithAdminAuth>
        <AdminToolbar />
      </WithAdminAuth>
      <Header />
      <main className="main">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
