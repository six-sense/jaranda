import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { GlobalStyles } from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import mixin from './Styles/mixin';

ReactDOM.render(
  <>
    <GlobalStyles />
    <ThemeProvider theme={mixin}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById('root'),
);
