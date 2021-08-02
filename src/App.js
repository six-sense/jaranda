import React from 'react';
import styled from 'styled-components';
import LandingPage from 'Pages/LandingPage';
import LoginPage from 'Pages/LoginPage';
import SignUpPage from 'Pages/SignUpPage';
import AdminPage from 'Pages/AdminPage';
import { Route } from 'react-router-dom';
import { routes } from 'utils/constants';

function App() {
  return (
    <div>
      <Hello>
        <Route exact path={routes.MAIN} component={LandingPage} />
        <Route path={routes.SIGN_IN} component={LoginPage} />
        <Route path={routes.SIGN_UP} component={SignUpPage} />
        <Route path={routes.ADMIN} component={AdminPage} />
      </Hello>
    </div>
  );
}

export default App;

const Hello = styled.div`
  ${({ theme }) => theme.flexSet()};
`;
