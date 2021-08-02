import React from 'react';
import jaranda from 'Assets/jarandalogo.png';
import {
  NavbarContainer,
  NavbarInnerContainer,
  NavLink,
  NavMenu,
} from 'Styles/NavbarStyles';

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <NavbarInnerContainer>
          <NavLink to="/">
            <img src={jaranda} alt="logo" />
          </NavLink>
          <NavMenu>
            <NavLink to="/parent">자란다선생님 보기</NavLink>
            <NavLink to="/teacher">선생님지원하기</NavLink>
            <NavLink to="/help">이용안내</NavLink>
            <NavLink to="/account">로그인/회원가입</NavLink>
          </NavMenu>
        </NavbarInnerContainer>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
