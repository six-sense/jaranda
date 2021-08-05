import React, { useEffect, useState } from 'react';
import Modal from 'Modal';
import SignUpPage from 'Pages/SignUpPage';
import searchIcon from 'Assets/search.png';
import { style } from './AdminPageStyle';
import { useHistory } from 'react-router-dom';
import { LOCAL_STORAGE, ROUTES } from 'utils/constants';
import { getUserInfo } from 'utils/getUserInfo';
import Checkbox from 'Compnents/Checkbox/Checkbox';
const properties = [
  { label: 'menu1', value: 'menu1' },
  { label: 'menu2', value: 'menu2' },
  { label: 'menu3', value: 'menu3' },
  { label: 'menu4', value: 'menu4' },
  { label: 'menu5', value: 'menu5' },
];

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

  // const onHandleButton = (page) => {
  //   console.log(page)
  //   const currentIndex = checkedArray.indexOf(page);
  //   const newChecked = [...checkedArray];

  //   if (currentIndex === -1) newChecked.push(page);
  //   else newChecked.splice(currentIndex, 1);

  //   setCheckedArray(newChecked);
  // };

  useEffect(() => {
    console.log(checkedArray);
  }, [checkedArray]);

  const onHandleChckBtn = (page, tindex) => {
    const seletedInfo = Object.keys(checkedArray).includes(tindex.toString());
    let obj = new Object();

    if (seletedInfo === false) {
      let newSelected = [];
      newSelected = newSelected.concat(page);

      for (const [key, value] of Object.entries(checkedArray)) {
        obj[key] = value;
      }
      obj[tindex] = newSelected;
      setCheckedArray(obj);
    } else {
      const selectedIndex = checkedArray[tindex].indexOf(page);
      let newSelected = [];
      if (selectedIndex == -1) {
        newSelected = newSelected.concat(checkedArray[tindex], page);
      } else {
        newSelected = newSelected.concat(checkedArray[tindex]);
        newSelected.splice(selectedIndex, 1);
      }

      for (const [key, value] of Object.entries(checkedArray)) {
        obj[key] = value;
      }
      obj[tindex] = newSelected;
      setCheckedArray(obj);
    }
  };
  const isSelected = (name, indexs) => {
    // console.log(checkedArray[indexs])
    if (
      Object.keys(checkedArray).length > 0 &&
      Object.keys(checkedArray).includes(indexs.toString())
    ) {
      if (checkedArray[indexs].indexOf(name) == -1) {
        return false;
      } else {
        return true;
      }
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
                    {properties.map((property, index) => {
                      let isItemSelected = isSelected(property.value, indexs);

                      return (
                        <div key={index}>
                          <Checkbox
                            type="checkbox"
                            checked={isItemSelected}
                            id={index}
                            onClick={() =>
                              onHandleChckBtn(property.value, indexs)
                            }
                          />
                          <label>{property.label}</label>
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
