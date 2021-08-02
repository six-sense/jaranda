import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { routes } from 'utils/constants';
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
        <Route exact path={routes.MAIN} component={LandingPage} />
        <Route path={routes.PARENT} component={Parent} />
        <Route path={routes.TEACHER} component={Teacher} />
        <Route path={routes.HELP} component={Help} />
        <Route path={routes.SIGN_IN} component={LoginPage} />
        <Route path={routes.SIGN_UP} component={SignUpPage} />
        <Route path={routes.ADMIN} component={AdminPage} />
      </Switch>
    </Router>
  );
}

export default App;
