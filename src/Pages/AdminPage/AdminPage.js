import React, { useEffect, useState } from 'react';
import Modal from 'Modal';
import SignUpPage from 'Pages/SignUpPage';
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
  const [showModal, setShowModal] = useState(false);

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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    setDatas(userData);
  }, []);

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
              <Cell>userId</Cell>
              <Cell>Name</Cell>
              <Cell>age</Cell>
              <Cell>Role</Cell>
              <Cell>Address</Cell>
              <Cell>Pages</Cell>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, index) => (
              <tr key={index}>
                <Cell>{data.userId}</Cell>
                <Cell>{data.name}</Cell>
                <Cell>{data.age}</Cell>
                <Cell>{data.role}</Cell>
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
} = style;
