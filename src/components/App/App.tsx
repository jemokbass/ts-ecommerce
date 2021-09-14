import { FC, useEffect, useState } from 'react';
import { auth, handleUserProfile } from '../../utils/firebase/utils.firebase';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Routes from './routes';
import { IUserState } from '../../utils/types/user.types';

const initialState: IUserState = {
  currentUser: null,
};

const App: FC = () => {
  const [state, setState] = useState<IUserState>({ ...initialState });

  let authListener: any = null;

  useEffect(() => {
    authListener = auth.onAuthStateChanged(async (userAuth: any) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef?.onSnapshot(snapshot => {
          setState((prevState: any) => ({
            ...prevState,
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
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
