import { ReactNode } from 'react';
import { useAdminAuth } from '../hooks/useAdminAuth';

interface IWithAdminAuth {
  children: ReactNode;
}

const WithAdminAuth = ({ children }: IWithAdminAuth) => <>{useAdminAuth() && children}</>;

export default WithAdminAuth;
