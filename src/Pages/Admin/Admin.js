import React, { useEffect, useState } from 'react';
import Modal from 'Modal';
import SignUp from 'Pages/SignUp';
import searchIcon from 'Assets/search.png';
import { style } from './AdminStyle';
import { MENUS, LOCAL_STORAGE } from 'utils/constants';
import { getUserInfo } from 'utils/getUserInfo';
import Checkbox from 'Compnents/Checkbox';
import Layout from 'Compnents/Layout';
import { AiOutlineCheck } from 'react-icons/ai';
import userDataForm from 'utils/storage/userDataForm';

function Admin() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [checkedArray, setCheckedArray] = useState({});
  const [modalStyle, setModalStyle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pages, setPages] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [clickCheck, setClickCheck] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const limit = 10;

  const onHandleSearch = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    initSelected(LOCAL_STORAGE.get('userData'));
  }, [data]);

  const initSelected = (userData) => {
    let obj = new Object();
    obj = userData.reduce(
      (acc, cur) => ({ ...acc, [cur.userId]: cur.menubar }),
      {},
    );

    setCheckedArray(obj);
  };

  const checkedKeys = Object.keys(checkedArray);

  const onHandleChckBtn = (page, path, userId) => {
    const seletedInfo = checkedKeys.includes(userId);
    let obj = new Object();
    let newSelected = [];

    let innerObj = new Object();
    innerObj['name'] = page;
    innerObj['path'] = path;

    if (seletedInfo === false || checkedArray[userId].length <= 0) {
      newSelected.push(innerObj);
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
    if (checkedKeys.length > 0 && checkedKeys.includes(userId.toString())) {
      for (const [key] of Object.entries(checkedArray[userId])) {
        if (checkedArray[userId][Number(key)].name === name) {
          return true;
        }
      }
    }
  };

  const submitBtnClick = async () => {
    // localStorage 셋팅
    const allUserData = await LOCAL_STORAGE.get('userData');
    let userArray = [];
    for (let i = 0; i < Object.keys(allUserData).length; i++) {
      let origin_userId = allUserData[i].userId;
      let menubar = checkedArray[origin_userId];

      console.log(menubar);
      userArray.push(
        userDataForm(
          origin_userId,
          allUserData[i].password,
          allUserData[i].name,
          allUserData[i].age,
          allUserData[i].creditCard.cardNumber,
          allUserData[i].creditCard.holderName,
          allUserData[i].creditCard.expired,
          allUserData[i].creditCard.CVC,
          allUserData[i].role,
          allUserData[i].address,
          menubar,
        ),
      );
      console.log(userArray);
    }
    LOCAL_STORAGE.set('userData', userArray);
    setIsSubmit(true);
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

  const openModal = () => {
    setShowModal(true);
    setModalStyle(!modalStyle);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalStyle(!modalStyle);
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
    <Layout>
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
            {!isSubmit && (
              <GoRolePageButton onClick={submitBtnClick}>
                페이지 권한 확정하기
              </GoRolePageButton>
            )}

            {isSubmit && (
              <GoRolePageButton disabled={true} onClick={submitBtnClick}>
                <AiOutlineCheck />
                확정되었습니다.
              </GoRolePageButton>
            )}
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
      <Modal
        show={showModal}
        onClose={() => closeModal()}
        accountStyle={modalStyle}
      >
        <SignUp accountPlus={modalStyle} />
      </Modal>
    </Layout>
  );
}

export default Admin;

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
