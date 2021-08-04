import React, { useEffect, useState } from 'react';
import Modal from 'Modal';
import SignUpPage from 'Pages/SignUpPage';
import searchIcon from 'Assets/search.png';
import { style } from './AdminPageStyle';
// import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';
import { LOCAL_STORAGE, ROUTES } from 'utils/constants';
import { getUserInfo } from 'utils/getUserInfo';

// const properties = [
//   { label: 'Parents', value: 'Parents' },
//   { label: 'Teachers', value: 'Teachers' },
// ];

function AdminPage() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  // const [checkedArray, setCheckedArray] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [pages, setPages] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [clickCheck, setClickCheck] = useState(false);
  const limit = 10;
  const menuList = ['PARENT', 'HELP', 'LOG'];

  const onHandleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onHandleChecked = (data, menu) => {
    if (data.menubar.indexOf(menu) >= 0) {
      return true;
    }
    return false;
  };

  const onHandleCheck = async (data, menu) => {
    const temp = data;
    // console.log(temp);
    const userData = await LOCAL_STORAGE.get('userData');
    const userIdx = userData.findIndex((user) => user.userId === temp.userId);
    if (!temp.menubar.find((dataMenu) => dataMenu === menu)) {
      const newUserData = userData
        .slice(0, userIdx)
        .concat([{ ...temp, menubar: temp.menubar.concat([menu]) }])
        .concat(userData.slice(userIdx + 1));
      // console.log('good', newUserData);
      await LOCAL_STORAGE.set('userData', newUserData);
    } else {
      const menuIdx = temp.menubar.indexOf(menu);
      // console.log(
      //   temp.menubar.slice(0, menuIdx).concat(temp.menubar.slice(menuIdx + 1)),
      // );
      const newUserData = userData
        .slice(0, userIdx)
        .concat([
          {
            ...temp,
            menubar: temp.menubar
              .slice(0, menuIdx)
              .concat(temp.menubar.slice(menuIdx + 1)),
          },
        ])
        .concat(userData.slice(userIdx + 1));
      // console.log('bad', newUserData);
      await LOCAL_STORAGE.set('userData', newUserData);
    }
    setClickCheck(true);
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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const userInfo = getUserInfo(pages, limit, searchValue);
    setData(userInfo.userData);
    setMaxPage(userInfo.maxPage);
    setClickCheck(false);
  }, [pages, searchValue, clickCheck]);

  return (
    <div>
      <TableContainer>
        <TableTitleContainer>
          <TableTitleBox>
            <TableTitle>사용자 목록</TableTitle>
            <AccountAddButton onClick={() => openModal()}>
              계정 추가
            </AccountAddButton>
          </TableTitleBox>
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
              <Cell>ID</Cell>
              <Cell>Name</Cell>
              <Cell>Age</Cell>
              <Cell>Role</Cell>
              <Cell>Address</Cell>
              <Cell>Pages</Cell>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((data, index) => {
                return (
                  <tr key={index}>
                    <Cell>{data.userId}</Cell>
                    <Cell>{data.name}</Cell>
                    <Cell>{data.age}</Cell>
                    <Cell>{data.role}</Cell>
                    <Cell>{data.address}</Cell>
                    <Cell>
                      {menuList.map((menu, index) => {
                        return (
                          <div key={index}>
                            <CheckButton
                              type="checkbox"
                              id={index}
                              checked={onHandleChecked(data, menu)}
                              onChange={() => onHandleCheck(data, menu)}
                            />
                            <label>{menu}</label>
                          </div>
                        );
                      })}
                    </Cell>
                  </tr>
                );
              })}
          </tbody>
        </table>
        <TableFooter>
          <div>
            <AiOutlineLeftStyle
              pageEnd={pages === 1}
              onClick={onHandleButtonLeft}
            />
            <div>{pages}</div>
            <AiOutlineRightStyle
              pageEnd={pages === maxPage}
              onClick={onHandleButtonRight}
            />
          </div>
        </TableFooter>
      </TableContainer>
      <Modal show={showModal} onClose={() => closeModal()}>
        <SignUpPage />
      </Modal>
    </div>
  );
}

export default AdminPage;

const {
  Cell,
  CheckButton,
  AccountAddButton,
  Searchbox,
  SearchContainer,
  SearchIcon,
  TableContainer,
  TableTitleBox,
  TableFooter,
  TableTitle,
  TableTitleContainer,
  GoRolePageButton,
  AiOutlineLeftStyle,
  AiOutlineRightStyle,
} = style;
