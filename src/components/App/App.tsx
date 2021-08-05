import { FC } from 'react';
import HomePage from '../../pages/HomePage/HomePage';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const App: FC = ({}) => {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <HomePage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
