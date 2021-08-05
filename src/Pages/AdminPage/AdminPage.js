import React, { useEffect, useState } from 'react';
import Modal from 'Modal';
import SignUpPage from 'Pages/SignUpPage';
import searchIcon from 'Assets/search.png';
import { style } from './AdminPageStyle';
import { useHistory } from 'react-router-dom';
import { ROUTES, MENUS } from 'utils/constants';
import { getUserInfo } from 'utils/getUserInfo';
import Checkbox from 'Compnents/Checkbox/Checkbox';

function AdminPage() {
  const history = useHistory();
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [checkedArray, setCheckedArray] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [pages, setPages] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [clickCheck, setClickCheck] = useState(false);
  const limit = 10;
  const menuList = ['PARENT', 'HELP', 'LOG'];

  const onHandleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  const onHandleChckBtn = (page, path, userId) => {
    const seletedInfo = Object.keys(checkedArray).includes(userId);
    let obj = new Object();
    let newSelected = [];

    let innerObj = new Object();
    innerObj['name'] = page;
    innerObj['path'] = path;

    if (seletedInfo === false || checkedArray[userId].length <= 0) {
      newSelected = newSelected.concat(innerObj);
    } else {
      let selectedIndex = true;
      for (const key in checkedArray[userId]) {
        if (checkedArray[userId][key].name !== innerObj.name) {
          selectedIndex = false;
        } else {
          selectedIndex = true;
          break;
        }
      }

      if (selectedIndex === false) {
        newSelected = newSelected.concat(checkedArray[userId], innerObj);
      } else {
        newSelected = newSelected.concat(checkedArray[userId]);
        const rmvFindIndx = newSelected.indexOf(
          newSelected.find((elem) => elem.name === innerObj.name),
        );
        newSelected.splice(rmvFindIndx, 1);
      }
    }

    for (const [key, value] of Object.entries(checkedArray)) {
      obj[key] = value;
    }
    obj[userId] = newSelected;
    setCheckedArray(obj);
  };
  const isSelected = (name, userId) => {
    if (
      Object.keys(checkedArray).length > 0 &&
      Object.keys(checkedArray).includes(userId.toString())
    ) {
      for (const [key] of Object.entries(checkedArray[userId])) {
        if (checkedArray[userId][Number(key)].name === name) {
          return true;
        }
      }
      return false;
    } else {
      return false;
    }
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
    // console.log(pages,data);
    const userInfo = getUserInfo(pages, limit, searchValue);
    // console.log('userInfo', userInfo);
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
              <Cell>Menu</Cell>
            </tr>
          </thead>
          {data &&
            data.map((data, indexs) => (
              <tbody key={indexs}>
                <tr key={indexs}>
                  <Cell>{data.userId}</Cell>
                  <Cell>{data.name}</Cell>
                  <Cell>{data.age}</Cell>
                  <Cell>{data.role}</Cell>
                  <Cell>{data.address}</Cell>
                  <Cell>
                    {MENUS.map((property, index) => {
                      // console.log(property.name, index)
                      let isItemSelected = isSelected(
                        property.name,
                        data.userId,
                      );

                      return (
                        <div key={index}>
                          <Checkbox
                            type="checkbox"
                            checked={isItemSelected}
                            id={index}
                            onClick={() =>
                              onHandleChckBtn(
                                property.name,
                                property.path,
                                data.userId,
                              )
                            }
                          />
                          <label>{property.name}</label>
                        </div>
                      );
                    })}
                  </Cell>
                </tr>
              </tbody>
            ))}
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
  // CheckButton,
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
