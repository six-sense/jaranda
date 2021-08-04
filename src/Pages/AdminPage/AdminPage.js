import React, { useEffect, useState } from 'react';
import searchIcon from 'Assets/search.png';
import { style } from './AdminPageStyle';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { ROUTES } from 'utils/constants';
import { getUserInfo } from 'utils/getUserInfo';

const properties = [
  { label: 'Parents', value: 'Parents' },
  { label: 'Teachers', value: 'Teachers' },
];

function AdminPage() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [checkedArray, setCheckedArray] = useState([]);
  const [pages, setPages] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const limit = 10;

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

  const onHandleButtonLeft = () => {
    const page = pages - 1;
    if (page < 1) {
      setPages(1);
    } else {
      setPages(page);
    }
  };

  const onHandleButtonRight = () => {
    const page = pages + 1;
    if (page > maxPage) {
      setPages(maxPage);
    } else {
      setPages(page);
    }
  };

  const goRoleManagementPage = () => {
    history.push(ROUTES.ROLE_MANAGEMENT);
  };

  useEffect(() => {
    console.log(pages);
    const userInfo = getUserInfo(pages, limit, searchValue);
    console.log('userInfo', userInfo);
    setData(userInfo.userData);
    setMaxPage(userInfo.maxPage);
  }, [pages, searchValue]);

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
            {data &&
              data.map((data, index) => (
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
            <AiOutlineLeft onClick={onHandleButtonLeft} />
            <AiOutlineRight onClick={onHandleButtonRight} />
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
