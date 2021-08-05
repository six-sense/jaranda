import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES, LOCAL_STORAGE, PUBLIC_MENUS } from 'utils/constants';
import Navbar from 'Compnents/Navbar';
import LandingPage from 'Pages/LandingPage';
import LoginPage from 'Pages/LoginPage';
import SignUpPage from 'Pages/SignUpPage/SignUpPage';
import AdminPage from 'Pages/AdminPage';
import Help from 'Pages/Help';
import RoleManagement from 'Pages/RoleManagementPage';
import userData from 'utils/userData.json';
import roleMenu from 'utils/roleMenu.json';
import { checkIsAdmin, getCurrentUser, getUserMenu } from 'utils/getUserInfo';

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
        <Route exact path={ROUTES.MAIN} component={LandingPage} />
        <Route path={ROUTES.HELP} component={Help} />
        <Route path={ROUTES.SIGN_IN}>
          <LoginPage handleLogin={handleLogin} />
        </Route>
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.ROLE_MANAGEMENT} component={RoleManagement} />
      </Switch>
    </>
  );
}

export default App;
