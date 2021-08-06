import styled from 'styled-components';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

export const TableContainer = styled.div`
  max-width: 960px;
  margin: 3rem auto;

  & > table {
    width: 100%;
    vertical-align: middle;
  }

  & > table > thead > tr > th {
    font-weight: 500;
  }
`;

export const Cell = styled.th`
  display: table-cell;
  padding: 16px;
  font-size: 0.875rem;
  text-align: left;
  font-weight: 400;
  line-height: 1.5rem;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  letter-spacing: 0.01071em;
  vertical-align: inherit;

  & > div {
    display: flex;
  }
`;

export const TableTitleContainer = styled.div`
  padding-left: 16px;
  padding-right: 8px;
  min-height: 64px;
  display: flex;
  justify-content: space-between;
`;

export const TableTitleBox = styled.div`
  ${({ theme }) => theme.flexSet()}
`;

export const TableTitle = styled.h4`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.6rem;
  letter-spacing: 0.0075em;
`;

export const AccountAddButton = styled.button`
  ${({ theme }) => theme.flexSet()}
  width: 100px;
  font-size: 12px;
  height: 38px;
  margin-left: 20px;
  border-radius: 6px;
  color: #fff;
  background-color: #87bf44;
  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const Searchbox = styled.input`
  border: 0;
  left: -42px;
  margin: 11px;
  width: 170px;
  position: relative;
  border-radius: 15px;
  padding: 0 10px 0 45px;
  background-color: inherit;
  transition: 0.3s ease-in-out;
  outline: 0 !important;

  &:hover {
    width: 240px;
    color: #1a2634;
    background-color: #f6ffed;
  }
`;

export const SearchIcon = styled.img`
  z-index: 1;
  cursor: pointer;
  margin-top: 1.3em;
  margin-left: 3em;
  width: 1.5rem;
  height: 1.5rem;
`;

export const TableFooter = styled.div`
  min-height: 52px;
  padding-right: 2px;
  float: right;

  & > div {
    display: flex;
    padding-top: 20px;
    font-size: 20px;
    margin-right: 1rem;
  }

  & > div > svg {
    margin-left: 3rem;
    cursor: pointer;
  }

  & > div > div {
    margin-left: 2.8rem;
    font-size: 17px;
    padding-bottom: 10px;
  }
`;

export const RoleButonWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

export const GoRolePageButton = styled.button`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  color: rgb(44, 44, 49);

  &:hover {
    background-color: #f6ffed;
  }

  & > svg {
    margin-right: 0.7rem;
  }
`;

export const AiOutlineLeftStyle = styled(AiOutlineLeft)`
  color: ${({ pageEnd }) => (pageEnd ? 'lightgray' : '')};
`;

export const AiOutlineRightStyle = styled(AiOutlineRight)`
  color: ${({ pageEnd }) => (pageEnd ? 'lightgray' : '')};
`;

export const style = {
  Cell,
  Searchbox,
  SearchContainer,
  SearchIcon,
  AccountAddButton,
  TableTitleBox,
  TableContainer,
  TableFooter,
  TableTitle,
  TableTitleContainer,
  GoRolePageButton,
  AiOutlineLeftStyle,
  AiOutlineRightStyle,
};
