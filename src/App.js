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
import { checkIsAdmin, getCurrentUser, getUserMenu } from 'utils/getUserInfo';
import { PrivateRoute, PublicRoute } from 'utils/routes';

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

  console.log('App', isLoggedIn, isAdmin);

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
        <PrivateRoute path={ROUTES.WATCH} restricted={isLoggedIn}>
          <Watch />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.FORM} restricted={isLoggedIn}>
          <Form />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.HISTORY} restricted={isLoggedIn}>
          <History />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.SCHEDULE} restricted={isLoggedIn}>
          <Schedule />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.LOG} restricted={isLoggedIn}>
          <Log />
        </PrivateRoute>

        {/* admin */}
        <PrivateRoute path={ROUTES.ADMIN} restricted={isAdmin}>
          <AdminPage />
        </PrivateRoute>
        <PrivateRoute path={ROUTES.ROLE_MANAGEMENT} restricted={isAdmin}>
          <RoleManagement />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
