import Navbar from 'Components/Navbar';
import React from 'react';
import PropTypes from 'prop-types';
import { Container, Contents } from './LayoutStyle';

function Layout({ children }) {
  return (
    <Container>
      <Navbar />
      <Contents>{children}</Contents>
    </Container>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
