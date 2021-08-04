import React from 'react';
import jaranda from 'Assets/jarandalogo.png';
import {
  NavbarContainer,
  NavbarInnerContainer,
  NavLink,
  NavMenu,
} from 'Styles/NavbarStyles';
import { ROUTES } from 'utils/constants';

const Navbar = () => {
  return (
    <div>
      <NavbarContainer>
        <NavbarInnerContainer>
          <NavLink to={ROUTES.MAIN}>
            <img src={jaranda} alt="logo" />
          </NavLink>
          <NavMenu>
            <NavLink to={ROUTES.PARENT}>자란다선생님 보기</NavLink>
            <NavLink to={ROUTES.TEACHER}>선생님지원하기</NavLink>
            <NavLink to={ROUTES.HELP}>이용안내</NavLink>
            <NavLink to={ROUTES.SIGN_IN}>로그인/회원가입</NavLink>
          </NavMenu>
        </NavbarInnerContainer>
      </NavbarContainer>
    </div>
  );
};

export default Navbar;
