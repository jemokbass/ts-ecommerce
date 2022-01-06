import { FC, useEffect } from 'react';
import { auth, handleUserProfile } from '../../utils/firebase/utils.firebase';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routes from './routes';
import { useActions } from '../../hooks/useActions';

const App: FC = () => {
  const { setCurrentUser } = useActions();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth: any) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef?.onSnapshot(snapshot => {
          setCurrentUser({
            uid: snapshot.id,
            ...snapshot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });

    return () => {
      authListener();
    };
    // eslint-disable-next-line
  }, []);

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
