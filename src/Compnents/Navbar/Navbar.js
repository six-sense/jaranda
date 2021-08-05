import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  NavbarContainer,
  NavbarInnerContainer,
  NavLink,
  NavMenu,
} from 'Styles/NavbarStyles';
import jaranda from 'Assets/jarandalogo.png';
import { LOCAL_STORAGE, PUBLIC_MENUS, ROUTES } from 'utils/constants';
import { checkIsAdmin, checkIsLoggedIn, getUserMenu } from 'utils/getUserInfo';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userMenu, setUserMenu] = useState([]);

  const handleLogout = () => {
    LOCAL_STORAGE.remove('token');
    setIsLoggedIn(checkIsLoggedIn());
  };

  useEffect(() => {
    setIsLoggedIn(checkIsLoggedIn());
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      setIsAdmin(checkIsAdmin());
      setUserMenu(getUserMenu());
    } else {
      setUserMenu(PUBLIC_MENUS);
      setIsAdmin(false);
    }
  }, [isLoggedIn]);

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
