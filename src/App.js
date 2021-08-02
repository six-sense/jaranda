import React from 'react';
import LandingPage from 'Pages/LandingPage';
import LoginPage from 'Pages/LoginPage';
import SignUpPage from 'Pages/SignUpPage';
import AdminPage from 'Pages/AdminPage';
import { Route } from 'react-router-dom';
import { ROUTES } from 'utils/constants';

function App() {
  return (
    <div>
      <Route exact path={ROUTES.MAIN} component={LandingPage} />
      <Route path={ROUTES.SIGN_IN} component={LoginPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  );
}

export default App;
