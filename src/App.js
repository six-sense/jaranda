import React from 'react';
import LandingPage from 'Pages/LandingPage';
import LoginPage from 'Pages/LoginPage';
import SignUpPage from 'Pages/SignUpPage';
import AdminPage from 'Pages/AdminPage';
import { Route } from 'react-router-dom';
import { routes } from 'utils/constants';

function App() {
  return (
    <div>
      <Route exact path={routes.MAIN} component={LandingPage} />
      <Route path={routes.SIGN_IN} component={LoginPage} />
      <Route path={routes.SIGN_UP} component={SignUpPage} />
      <Route path={routes.ADMIN} component={AdminPage} />
    </div>
  );
}

export default App;
