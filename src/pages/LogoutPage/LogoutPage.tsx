import { FC, useEffect } from 'react';
import { Redirect } from 'react-router';
import { auth } from '../../utils/firebase/utils';

const LogoutPage: FC = () => {
  useEffect(() => {
    auth.signOut();
  });

  return (
    <section className="logout-page">
      <Redirect to="/" />
    </section>
  );
};

export default LogoutPage;
