import { FC, useEffect } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routes from './routes';
import { useActions } from '../../hooks/useActions';

const App: FC = () => {
  const { checkUserSession } = useActions();

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default App;
