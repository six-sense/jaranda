import React, { useState } from 'react';
import GuestNavbar from './GuestNavbar';
import { NavbarContainer } from 'Styles/NavbarStyles';
import UserNavbar from './UserNavbar';

const Navbar = () => {
  // const [isLoggedIn] = useState(localStorage.getItem('token'));
  const [isLoggedIn] = useState(false);

  return (
    <div>
      <NavbarContainer>
        {isLoggedIn ? <GuestNavbar /> : <UserNavbar />}
        {/* <GuestNavbar /> */}
        {/* <UserNavbar /> */}
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
