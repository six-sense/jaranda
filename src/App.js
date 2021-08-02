import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from 'Compnents/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Hello />
      <Switch>
        <Route path="/" />
        <Route path="/parent" />
        <Route path="/teacher" />
        <Route path="/help" />
        <Route path="/account/login" />
        <Route path="/account/sign-up" />
      </Switch>
    </Router>
  );
}

export default App;

const Hello = styled.div`
  ${({ theme }) => theme.flexSet()};
`;
