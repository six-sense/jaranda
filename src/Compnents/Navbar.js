import React from 'react';
// import GuestNavbar from './GuestNavbar';
import { NavbarContainer } from 'Styles/NavbarStyles';
import UserNavbar from './UserNavbar';

const Navbar = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("userId"));

  return (
    <div>
      <NavbarContainer>
        {/* {isLoggedIn ? <GuestNavbar /> : <UserNavbar />} */}
        {/* <GuestNavbar /> */}
        <UserNavbar />
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
