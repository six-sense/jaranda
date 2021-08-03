import React from 'react';
import searchIcon from 'Assets/search.png';
import {
  Cell,
  CheckButton,
  Searchbox,
  SearchContainer,
  SearchIcon,
  TableContainer,
  TableFooter,
  TableTitle,
  TableTitleContainer,
} from './AdminPageStyle';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

const properties = [
  { label: 'Parents', value: 'Parents' },
  { label: 'Teachers', value: 'Teachers' },
];

function AdminPage() {
  return (
    <div>
      <TableContainer>
        <TableTitleContainer>
          <TableTitle>User List</TableTitle>
          <SearchContainer>
            <SearchIcon src={searchIcon} alt="search-icon" />
            <Searchbox type="text" placeholder="...Search" />
          </SearchContainer>
        </TableTitleContainer>
        <table>
          <thead>
            <tr>
              <Cell>Name</Cell>
              <Cell>Role</Cell>
              <Cell>Address</Cell>
              <Cell>Pages</Cell>
            </tr>
          </thead>
          <tbody>
            {/* Loop 시작 지점 */}
            <tr>
              <Cell>홍길동</Cell>
              <Cell>선생님</Cell>
              <Cell>강남구 테헤란로 블라블라</Cell>
              <Cell>
                <div>
                  {properties.map((property, index) => (
                    <CheckButton key={index}>{property.value}</CheckButton>
                  ))}
                </div>
              </Cell>
            </tr>
            <tr>
              <Cell>홍길동</Cell>
              <Cell>선생님</Cell>
              <Cell>강남구 테헤란로 블라블라</Cell>
              <Cell>
                <div>
                  {properties.map((property, index) => (
                    <CheckButton key={index}>{property.value}</CheckButton>
                  ))}
                </div>
              </Cell>
            </tr>
            <tr>
              <Cell>홍길동</Cell>
              <Cell>선생님</Cell>
              <Cell>강남구 테헤란로 블라블라</Cell>
              <Cell>
                <div>
                  <CheckButton>Parents</CheckButton>
                  <CheckButton>Teachers</CheckButton>
                </div>
              </Cell>
            </tr>
          </tbody>
        </table>
        <TableFooter>
          <div>
            <AiOutlineLeft />
            <AiOutlineRight />
          </div>
        </TableFooter>
      </TableContainer>
    </div>
  );
}

export default AdminPage;
