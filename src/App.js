import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES, LOCAL_STORAGE } from 'utils/constants';
import Navbar from 'Compnents/Navbar/index';
import LandingPage from 'Pages/LandingPage';
import LoginPage from 'Pages/LoginPage';
import SignUpPage from 'Pages/SignUpPage';
import AdminPage from 'Pages/AdminPage';
import Watch from 'Pages/Watch';
import Support from 'Pages/Support';
import Help from 'Pages/Help';
import RoleManagement from 'Pages/RoleManagementPage';
import userData from 'utils/userData.json';
import roleMenu from 'utils/roleMenu.json';
import Form from 'Pages/Form';
import History from 'Pages/History';
import Log from 'Pages/Log';
import Schedule from 'Pages/Schedule';

if (!LOCAL_STORAGE.get('userData')) {
  LOCAL_STORAGE.set('userData', userData);
}
if (!LOCAL_STORAGE.get('role')) {
  LOCAL_STORAGE.set('role', roleMenu);
}

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.MAIN} component={LandingPage} />
        <Route path={ROUTES.WATCH} component={Watch} />
        <Route path={ROUTES.SUPPORT} component={Support} />
        <Route path={ROUTES.HELP} component={Help} />
        <Route path={ROUTES.SIGN_IN} component={LoginPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
        <Route path={ROUTES.FORM} component={Form} />
        <Route path={ROUTES.HISTORY} component={History} />
        <Route path={ROUTES.LOG} component={Log} />
        <Route path={ROUTES.SCHEDULE} component={Schedule} />
        <Route path={ROUTES.ROLE_MANAGEMENT} component={RoleManagement} />
      </Switch>
    </Router>
  );
}

export default App;
