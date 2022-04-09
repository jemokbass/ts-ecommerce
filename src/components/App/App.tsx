import { FC, useEffect } from "react";

import { Footer } from "../Footer";
import { Header } from "../Header";
import { Routes } from "./routes";
import { useActions } from "../../hooks/useActions";
import { AdminToolbar } from "../AdminToolbar";
import { WithAdminAuth } from "../../hoc";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes/routes";

export const App: FC = () => {
  const { checkUserSession } = useActions();
  const { pathname } = useLocation();
  let mainClass = "main";

  switch (pathname) {
    case ROUTES.ADMIN:
      mainClass += " main-aside";
      break;
    default:
      break;
  }

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="app">
      <WithAdminAuth>
        <AdminToolbar />
      </WithAdminAuth>
      <Header />
      <main className={mainClass}>
        <Routes />
      </main>
      <Footer />
    </div>
  );
};
