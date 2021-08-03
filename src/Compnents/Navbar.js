import React from 'react';
import GuestNavbar from './GuestNavbar';
import { NavbarContainer } from 'Styles/NavbarStyles';
import UserNavbar from './UserNavbar';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <NavbarContainer>
        {isLoggedIn ? <GuestNavbar /> : <UserNavbar />}
        <GuestNavbar />
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
