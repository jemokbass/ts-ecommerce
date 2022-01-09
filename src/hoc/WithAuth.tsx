import { ReactNode } from 'react';
import { useAuth } from '../hooks/useAuth';

interface IWithAuth {
  children: ReactNode;
}

const WithAuth = ({ children }: IWithAuth) => <>{useAuth() && children}</>;

export default WithAuth;
