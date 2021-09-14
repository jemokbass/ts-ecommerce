import { FC, useEffect } from 'react';
import { auth, handleUserProfile } from '../../utils/firebase/utils.firebase';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routes from './routes';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const App: FC = () => {
  const { currentUser } = useTypedSelector(state => state.user);
  const { setCurrentUser } = useActions();

  let authListener: any = null;

  useEffect(() => {
    authListener = auth.onAuthStateChanged(async (userAuth: any) => {
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
  }, []);

  return (
    <div className="app">
      <Header currentUser={currentUser} />
      <main className="main">
        <Routes currentUser={currentUser} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
