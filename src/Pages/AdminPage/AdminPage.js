import React, { useEffect, useState } from 'react';
import searchIcon from 'Assets/search.png';
import { style } from './AdminPageStyle';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import userData from 'utils/userData.json';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'utils/constants';

const properties = [
  { label: 'Parents', value: 'Parents' },
  { label: 'Teachers', value: 'Teachers' },
];

function AdminPage() {
  const history = useHistory();
  const [datas, setDatas] = useState([]);
  const [, setSearchValue] = useState('');
  const [checkedArray, setCheckedArray] = useState([]);

  const onHandleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onHandleButton = (page) => {
    const currentIndex = checkedArray.indexOf(page);
    const newChecked = [...checkedArray];

    if (currentIndex === -1) newChecked.push(page);
    else newChecked.splice(currentIndex, 1);

    setCheckedArray(newChecked);
  };

  const goRoleManagementPage = () => {
    history.push(ROUTES.ROLE_MANAGEMENT);
  };

  useEffect(() => {
    setDatas(userData);
  }, []);

  return (
    <div>
      <TableContainer>
        <TableTitleContainer>
          <TableTitle>사용자 목록</TableTitle>
          <SearchContainer>
            <SearchIcon src={searchIcon} alt="search-icon" />
            <Searchbox
              type="text"
              placeholder="Search Name"
              onChange={onHandleSearch}
            />
            <GoRolePageButton onClick={goRoleManagementPage}>
              권한 별 사용자 목록 보기
            </GoRolePageButton>
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
                  {properties.map((property, index) => (
                    <div key={index}>
                      <CheckButton
                        type="checkbox"
                        id={index}
                        onChange={() => onHandleButton(property.value)}
                      />
                      <span>{property.label}</span>
                    </div>
                  ))}
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
  GoRolePageButton,
} = style;
