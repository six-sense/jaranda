/**
 * @memo 주석 처리된 부분들은 Modal 컴포넌트 개발이 완료되면
 * 추가적으로 진행할 부분입니다.
 * 일단 지우지 않으셔도 될 것 같아요
 */

import React, { useEffect, useState } from 'react';
import searchIcon from 'Assets/search.png';
import { style } from './AdminPageStyle';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { userData } from 'utils/storage/userData';

// const properties = [
//   { label: 'Parents', value: 'Parents' },
//   { label: 'Teachers', value: 'Teachers' },
// ];

function AdminPage() {
  const [datas, setDatas] = useState([]);
  const [, setSearchValue] = useState('');
  // const [checked, setChecked] = useState(false);
  // const [checkedArray, setCheckedArray] = useState([]);

  const onHandleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  // const onHandlePageButton = (page) => {
  //   const currentIndex = checkedArray.indexOf(page);
  //   const newChecked = [...checkedArray];

  //   if (currentIndex === -1) newChecked.push(page);
  //   else newChecked.splice(currentIndex, 1);

  //   setCheckedArray(newChecked);
  //   setChecked(true);
  // };

  useEffect(() => {
    setDatas(userData);
  }, []);

  return (
    <div>
      <TableContainer>
        <TableTitleContainer>
          <TableTitle>User List</TableTitle>
          <SearchContainer>
            <SearchIcon src={searchIcon} alt="search-icon" />
            <Searchbox
              type="text"
              placeholder="Search Name"
              onChange={onHandleSearch}
            />
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
            {datas.map((data, index) => (
              <tr key={index}>
                <Cell>{data.name}</Cell>
                <Cell>{data.age}</Cell>
                <Cell>{data.address}</Cell>
                <Cell>
                  <div>
                    <CheckButton>권한 변경</CheckButton>
                  </div>
                </Cell>
              </tr>
            ))}
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

const {
  Cell,
  CheckButton,
  Searchbox,
  SearchContainer,
  SearchIcon,
  TableContainer,
  TableFooter,
  TableTitle,
  TableTitleContainer,
} = style;
