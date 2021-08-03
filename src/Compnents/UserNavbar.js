import React, { useState } from 'react';
import jaranda from 'Assets/jarandalogo.png';
import { NavbarInnerContainer, NavLink, NavMenu } from 'Styles/NavbarStyles';

const UserNavbar = () => {
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
            to="/parent"
            onClick={handleToggle}
            className={isActive ? null : 'active'}
          >
            선생님보기
          </NavLink>
          <NavLink
            to="/teacher"
            onClick={handleToggle}
            className={isActive ? null : 'active'}
          >
            신청서작성하기
          </NavLink>
          <NavLink
            to="/help"
            onClick={handleToggle}
            className={isActive ? null : 'active'}
          >
            신청내역
          </NavLink>
          <NavLink
            to="/signin"
            onClick={handleToggle}
            className={isActive ? null : 'active'}
          >
            방문일정
          </NavLink>
          <NavLink
            to="/signup"
            onClick={handleToggle}
            className={isActive ? null : 'active'}
          >
            방문일지
          </NavLink>
          <NavLink to="/">로그아웃</NavLink>
        </NavMenu>
      </NavbarInnerContainer>
    </div>
  );
};

export default UserNavbar;
