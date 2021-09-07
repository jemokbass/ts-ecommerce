import { FC, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { auth } from '../../utils/firebase/utils';

const LogoutPage: FC = () => {
  const [isSuccessful, setIsSuccessful] = useState(false)
  
  const logOutAction = async () => {
    await auth.signOut();
    setIsSuccessful(true)
  }
  
  useEffect(() => {
    logOutAction();
    
    return () => {logOutAction()}
  });

  return (
    <section className="logout-page">
      {isSuccessful && <Redirect to="/" />}
    </section>
  );
};

export default LogoutPage;
