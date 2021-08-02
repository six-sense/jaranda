import React, { useState } from 'react';
import jaranda from 'Assets/jarandalogo.png';
import {
  NavbarContainer,
  NavbarInnerContainer,
  NavLink,
  NavMenu,
} from 'Styles/NavbarStyles';

const Navbar = () => {
  const [isActive, setIsActive] = useState('false');

  const handleToggle = () => {
    setIsActive(isActive);
  };

  return (
    <div>
      <NavbarContainer>
        <NavbarInnerContainer>
          <NavLink to="/">
            <img src={jaranda} alt="logo" />
          </NavLink>
          <NavMenu>
            <NavLink
              to="/parent"
              onClick={handleToggle}
              className={isActive ? null : 'active'}
            >
              자란다선생님 보기
            </NavLink>
            <NavLink
              to="/teacher"
              onClick={handleToggle}
              className={isActive ? null : 'active'}
            >
              선생님지원하기
            </NavLink>
            <NavLink
              to="/help"
              onClick={handleToggle}
              className={isActive ? null : 'active'}
            >
              이용안내
            </NavLink>
            <NavLink
              to="/signin"
              onClick={handleToggle}
              className={isActive ? null : 'active'}
            >
              로그인/회원가입
            </NavLink>
          </NavMenu>
        </NavbarInnerContainer>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
