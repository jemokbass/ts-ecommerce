import { ReactNode } from "react";
import { useAdminAuth } from "../hooks/useAdminAuth";

interface IWithAdminAuth {
  children: ReactNode;
}

export const WithAdminAuth = ({ children }: IWithAdminAuth) => <>{useAdminAuth() && children}</>;
