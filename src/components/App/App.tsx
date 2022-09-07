import { useEffect } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { Routes } from "./routes";
import { useActions } from "../../hooks/useActions";
import { AdminToolbar } from "../AdminToolbar";
import { WithAdminAuth } from "../../hoc";
import { useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/routes/routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export const App = () => {
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
      <ToastContainer autoClose={5000} closeOnClick pauseOnFocusLoss position="bottom-right" />
    </div>
  );
};
