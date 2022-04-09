import { ReactNode } from "react";
import { useAuth } from "../hooks/useAuth";

interface IWithAuth {
  children: ReactNode;
}

export const WithAuth = ({ children }: IWithAuth) => <>{useAuth() && children}</>;
