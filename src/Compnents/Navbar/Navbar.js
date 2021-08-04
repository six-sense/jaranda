import React from 'react';
import PropTypes from 'prop-types';
import {
  NavbarContainer,
  NavbarInnerContainer,
  NavLink,
  NavMenu,
} from 'Styles/NavbarStyles';
import jaranda from 'Assets/jarandalogo.png';
import { ROUTES } from 'utils/constants';

const Navbar = ({ isLoggedIn, userMenu, isAdmin, handleLogout }) => {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <NavLink to={ROUTES.MAIN}>
          <img src={jaranda} alt="logo" />
        </NavLink>
        <NavMenu>
          {!isAdmin &&
            userMenu.map((menu) => (
              <NavLink key={menu.path} to={menu.path}>
                {menu.name}
              </NavLink>
            ))}
          {isLoggedIn && (
            <NavLink to={ROUTES.MAIN} onClick={handleLogout}>
              로그아웃
            </NavLink>
          )}
        </NavMenu>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
};

export default Navbar;

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool,
  userMenu: PropTypes.array,
  isAdmin: PropTypes.bool,
  handleLogout: PropTypes.func,
};
