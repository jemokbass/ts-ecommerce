import { FC } from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routes from './routes';

const App: FC = () => {
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
