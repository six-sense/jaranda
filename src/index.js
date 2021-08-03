import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import mixin from './Styles/mixin';
import { GlobalStyles } from './Styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <ThemeProvider theme={{ ...mixin }}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </>,
  document.getElementById('root'),
);
