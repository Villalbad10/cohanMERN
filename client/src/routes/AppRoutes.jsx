import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { HashRouter, Route, Routes } from "react-router-dom";
import { dataLogin } from "../app/user.slice";
import Login from "../containers/Login";
import { DasboardRouter } from "./DashboarRouter";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const [checkAuth, setCheckAuth] = useState(true);
  const [logget, setLogget] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setLogget(true);
        dispatch(dataLogin(user.reloadUserInfo));
      } else {
        setLogget(false);
      }
      setCheckAuth(false);
    });
  }, [setLogget, setCheckAuth]);

  if (checkAuth) return <h1 style={{ color: "black" }}>Espere...</h1>;

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoutes isAuth={logget}>
              <Login />
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes isAuth={logget}>
              <DasboardRouter />
            </PrivateRoutes>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
