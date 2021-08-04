import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  ${({ theme }) => theme.flexSet()}
  width: 100%;
`;

export const NavbarInnerContainer = styled.div`
  ${({ theme }) => theme.flexSet()}
  justify-content: space-between;
  width: 960px;
  padding: 10px 0;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  padding: 0 15px;
  font-weight: 400;

  &:hover {
    color: #87bf44;
    font-weight: 500;
  }

  &.active {
    color: #87bf44;
    font-weight: 500;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;
`;
