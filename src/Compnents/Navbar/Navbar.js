import React, { useState, useEffect } from 'react';
// import GuestNavbar from './GuestNavbar';
import { NavbarContainer } from 'Styles/NavbarStyles';
import UserNavbar from './UserNavbar';
import { LOCAL_STORAGE } from 'utils/constants';

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false); //eslint-disable-line no-unused-vars
  const [currentUser, setCurrentUser] = useState('');
  const [menubar, setMenubar] = useState();

  useEffect(() => {
    setCurrentUser(LOCAL_STORAGE.get('token'));
    setMenubar({ menubar: LOCAL_STORAGE.get('role') });
  }, []);

  console.log(currentUser);
  console.log(menubar);

  return (
    <div>
      <NavbarContainer>
        {/* {isLoggedIn ? <UserNavbar /> : <GuestNavbar />} */}
        {/* <GuestNavbar /> */}
        <UserNavbar />
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
