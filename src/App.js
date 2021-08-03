import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ROUTES } from 'utils/constants';
import Navbar from 'Compnents/Navbar';
import LandingPage from 'Pages/LandingPage';
import LoginPage from 'Pages/LoginPage';
import SignUpPage from 'Pages/SignUpPage';
import AdminPage from 'Pages/AdminPage';
import Parent from 'Pages/Parent';
import Teacher from 'Pages/Teacher';
import Help from 'Pages/Help';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path={ROUTES.MAIN} component={LandingPage} />
        <Route path={ROUTES.PARENT} component={Parent} />
        <Route path={ROUTES.TEACHER} component={Teacher} />
        <Route path={ROUTES.HELP} component={Help} />
        <Route path={ROUTES.SIGN_IN} component={LoginPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
      </Switch>
    </Router>
  );
}

export default App;
