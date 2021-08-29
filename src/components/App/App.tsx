import { FC, useEffect, useState } from 'react';
import { auth, handleUserProfile } from '../../utils/firebase/utils';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routes from './routes';
import { IAuthState } from '../../utils/types/auth';

const initialState: IAuthState = {
  currentUser: null,
};

const App: FC = () => {
  const [state, setState] = useState({ ...initialState });

  let authListener: any = null;

  useEffect(() => {
    authListener = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef?.onSnapshot(snapshot => {
          setState(prevState => ({
            ...prevState,
            id: snapshot.id,
            ...snapshot.data(),
          }));
        });
      }

      setState({ ...initialState });
    });

    return () => {
      authListener();
    };
  }, []);

  return (
    <div className="app">
      <Header currentUser={state.currentUser} />
      <main className="main">
        <Routes currentUser={state.currentUser} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
