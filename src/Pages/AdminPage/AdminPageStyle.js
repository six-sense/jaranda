import styled from 'styled-components';

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

export const CheckButton = styled.input`
  display: flex;
  -webkit-box-align: center;
  padding-top: 10px;
  align-items: center;
  margin-right: 10px;
  padding: 10px 20px;
  background-color: ${({ checked }) => (checked ? '#c9cdd0' : 'white')};
  border-radius: 50px;
  border: 1px solid rgb(233, 235, 237);
  color: rgb(70, 70, 77);

  &:hover {
    background-color: #c9cdd0;
    color: white;
    cursor: pointer;
  }
`;

export const TableTitleContainer = styled.div`
  padding-left: 16px;
  padding-right: 8px;
  min-height: 64px;
  display: flex;
  justify-content: space-between;
`;

export const TableTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.6rem;
  letter-spacing: 0.0075em;
  padding-top: 0.5rem;
`;

export const SearchContainer = styled.div`
  display: flex;
`;

export const Searchbox = styled.input`
  border: 0;
  left: -42px;
  margin: 11px;
  width: 170px;
  color: hsla(0, 0%, 91.8%, 0.6549019607843137);
  position: relative;
  border-radius: 15px;
  padding: 0 10px 0 45px;
  background-color: inherit;
  transition: 0.3s ease-in-out;
  outline: 0 !important;

  &:hover {
    width: 240px;
    color: #1a2634;
    background-color: #f0f0f0;
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
  text-align: right;

  & > div {
    padding-top: 20px;
    font-size: 20px;
    margin-right: 1rem;
  }

  & > div > svg {
    cursor: pointer;
    margin-left: 3rem;
  }
`;

export const RoleButonWrapper = styled.div`
  width: 100%;
  text-align: right;
`;

export const style = {
  Cell,
  CheckButton,
  Searchbox,
  SearchContainer,
  SearchIcon,
  TableContainer,
  TableFooter,
  TableTitle,
  TableTitleContainer,
};
