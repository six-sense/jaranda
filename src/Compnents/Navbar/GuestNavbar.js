import React, { useState } from 'react';
import jaranda from 'Assets/jarandalogo.png';
import { NavbarInnerContainer, NavLink, NavMenu } from 'Styles/NavbarStyles';

const GuestNavbar = () => {
  const [isActive, setIsActive] = useState('false');

  const handleToggle = () => {
    setIsActive(isActive);
  };

  return (
    <div>
      <NavbarInnerContainer>
        <NavLink to="/">
          <img src={jaranda} alt="logo" />
        </NavLink>
        <NavMenu>
          <NavLink
            to="/watch"
            onClick={handleToggle}
            className={isActive ? null : 'active'}
          >
            자란다선생님 보기
          </NavLink>
          <NavLink
            to="/support"
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
    </div>
  );
};

export default GuestNavbar;
