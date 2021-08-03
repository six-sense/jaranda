import React, { useState } from 'react';
import GuestNavbar from './GuestNavbar';
import { NavbarContainer } from 'Styles/NavbarStyles';
import UserNavbar from './UserNavbar';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); //eslint-disable-line no-unused-vars

  return (
    <div>
      <NavbarContainer>
        {isLoggedIn ? <UserNavbar /> : <GuestNavbar />}
        {/* <GuestNavbar /> */}
        {/* <UserNavbar /> */}
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
