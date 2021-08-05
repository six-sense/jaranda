import React, { useEffect, useState } from 'react';
import { Switch } from 'react-router-dom';
import Navbar from 'Compnents/Navbar';
import LandingPage from 'Pages/LandingPage';
import Support from 'Pages/Support';
import Help from 'Pages/Help';
import LoginPage from 'Pages/LoginPage';
import SignUpPage from 'Pages/SignUpPage/SignUpPage';
import Watch from 'Pages/Watch';
import Form from 'Pages/Form';
import History from 'Pages/History';
import Schedule from 'Pages/Schedule';
import Log from 'Pages/Log';
import AdminPage from 'Pages/AdminPage';
import RoleManagement from 'Pages/RoleManagementPage';
import userData from 'utils/userData.json';
import roleMenu from 'utils/roleMenu.json';
import { ROUTES, LOCAL_STORAGE, PUBLIC_MENUS } from 'utils/constants';
import { PrivateRoute, PublicRoute } from 'routes';
import {
  checkIsAdmin,
  getCurrentUser,
  getUserMenu,
  isUserMenu,
} from 'utils/getUserInfo';

if (!LOCAL_STORAGE.get('userData')) {
  LOCAL_STORAGE.set('userData', userData);
}
if (!LOCAL_STORAGE.get('role')) {
  LOCAL_STORAGE.set('role', roleMenu);
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMenu, setUserMenu] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!isLoggedIn) {
      handleLogin();
    }
  }, [isLoggedIn]);

  const handleLogin = () => {
    if (getCurrentUser()) {
      setIsLoggedIn(true);
      setUserMenu(getUserMenu());
      setIsAdmin(checkIsAdmin());
    }
  };

  const handleLogout = () => {
    LOCAL_STORAGE.remove('token');

    setIsLoggedIn(false);
    setUserMenu(PUBLIC_MENUS);
    setIsAdmin(false);
  };

  return (
    <>
      <Navbar
        isLoggedIn={isLoggedIn}
        userMenu={isLoggedIn ? userMenu : PUBLIC_MENUS}
        isAdmin={isAdmin}
        handleLogout={handleLogout}
      />
      <Switch>
        {/* public */}
        <PublicRoute exact path={ROUTES.MAIN} restricted={false}>
          <LandingPage />
        </PublicRoute>
        <PublicRoute path={ROUTES.SUPPORT} restricted={false}>
          <Support />
        </PublicRoute>
        <PublicRoute path={ROUTES.HELP} restricted={false}>
          <Help />
        </PublicRoute>
        <PublicRoute path={ROUTES.SIGN_IN} restricted={true}>
          <LoginPage handleLogin={handleLogin} />
        </PublicRoute>
        <PublicRoute path={ROUTES.SIGN_UP} restricted={true}>
          <SignUpPage />
        </PublicRoute>

        {/* logged in user */}
        <PrivateRoute path={ROUTES.WATCH} restricted={isUserMenu(ROUTES.WATCH)}>
          <Watch />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.FORM} restricted={isUserMenu(ROUTES.FORM)}>
          <Form />
        </PrivateRoute>
        <PrivateRoute
          path={ROUTES.HISTORY}
          restricted={isUserMenu(ROUTES.HISTORY)}
        >
          <History />
        </PrivateRoute>
        <PrivateRoute
          path={ROUTES.SCHEDULE}
          restricted={isUserMenu(ROUTES.SCHEDULE)}
        >
          <Schedule />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.LOG} restricted={isUserMenu(ROUTES.LOG)}>
          <Log />
        </PrivateRoute>

        {/* admin */}
        <PrivateRoute path={ROUTES.ADMIN}>
          <AdminPage />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.ROLE_MANAGEMENT}>
          <RoleManagement />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
