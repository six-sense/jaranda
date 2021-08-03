import React, { useState } from 'react';
import { style } from './SignUpPageStyle';
import { FiCheck } from 'react-icons/fi';
import get_address from './get_address';
import userDataForm from 'utils/storage/userDataForm';
import setUserData from 'utils/setUserInfo';
import { Validation } from 'utils/checkValid';
import { LOCAL_STORAGE } from 'utils/constants';
import Modal from 'Modal';
import CreditCardForm from 'Compnents/CreditCardForm';

export default function SignUpPage() {
  const [userPwconfirm, setUserPwConfirm] = useState('');
  const { checkId, checkPassword } = Validation;
  const [userInfo, setUserInfo] = useState({
    userId: '',
    password: '',
    name: '',
    age: '',
    creditCard: {
      cardNumber: '',
      holderName: '',
      expired: '',
      CVC: '',
    },
    role: '',
        zcode: '',
    roadAddr: '',
    jibunAddr: '',
    detailAddr: '',
    // menubar:'',
  });

  const signupBtnEvnt = () => {
    const {userId, password, name, age, role} = userInfo;

    const userAddr =
      userInfo.zcode + ' ' + userInfo.roadAddr + ' ' + userInfo.detailAddr;
    inputData(userId, password, name, age, role, userAddr);
  };
  // id,pwd, name, age, cardNumber, c_name, expired, cvc, role,
  const inputData = (userId, pw, name, age, role, addr) => {
    const data = userDataForm(userId, pw, name, age, role, addr);
    setUserData(data);
  };

  const handleRadioButton = (name) => {
    setUserInfo({
      ...userInfo,
      role: name,
    });

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addrBtnEvent = () => {
    get_address(userInfo, setUserInfo);
  };

  const handleChange = (e) => {
    setUserInfo({ ...userInfo, detailAddr: e.target.value });
  };


  const handleId = (e) => {
    setUserInfo({
      ...userInfo,
      userId: e.target.value,
    });
  };

  const handleIdValidate = async () => {
    const checkValidId = checkId(userInfo.userId);
    let userData = LOCAL_STORAGE.get('userData');
    if (!userData) {
      userData = [];
    }
    const reduplication = userData.find(
      (data) => data.userId === userInfo.userId,
    );
    if (checkValidId && reduplication === undefined) {
      console.log('사용가능한 아이디입니다.');
      return;
    } else if (!checkValidId) {
      console.log('사용 가능하지 않은 아이디입니다.');
      return;
    } else {
      console.log('중복된 아이디입니다.');
    }
  };

  const onChangePW = (e) => {
    setUserInfo({
      ...userInfo,
      password: e.target.value,
    });
    HandleValidatePW(e.target.value);
  };

  const HandleValidatePW = (value) => {
    const checkValidPw = checkPassword(value);
    let userData = LOCAL_STORAGE.get('userData');

    if (!userData) {
      userData = [];
    }

    if (checkValidPw) {
      console.log('사용가능한 비밀번호입니다.');
    } else if (!checkValidPw) {
      console.log('사용할 수 없는 비밀번호 입니다.');
    }
  };

  const onChangePwconfirm = (e) => {
    setUserPwConfirm(e.target.value);
    MatchPW(e.target.value);
    console.log(userPwconfirm);
  };

  const MatchPW = (value) => {
    if (value !== userInfo.userPw) {
      console.log('비밀번호가 일치하지 않습니다.');
    } else if (value === userInfo.userPw) {
      console.log('비밀번호가 일치합니다.');
    }
  };

  const onChangeName = (e) => {
    setUserInfo({
      ...userInfo,
      name: e.target.value,
    });
    console.log(userInfo.userName);
  };

  const onChangeAge = (e) => {
    setUserInfo({
      ...userInfo,
      age: e.target.value,
    });
    console.log(userInfo.userAge);

  };
  return (
    <>
      <Container>
        <Wrap>
          <Title>
            10초 만에 가입하고
            <br />
            선생님 정보를 받아보세요
          </Title>
          <Wrapper_Radio>
            <label htmlFor="radio">
              <Input_Radio
                type="radio"
                id="teacherRadio"
                name="teacher"
                value="teacherRadio"
                checked={userInfo.role === 'teacher'}
                onClick={() => handleRadioButton('teacher')}
              />
              teacher
            </label>
            <label htmlFor="radio">
              <Input_Radio
                type="radio"
                id="parentRadio"
                name="parent"
                value="parentRadio"
                checked={userInfo.role === 'parent'}
                onClick={() => handleRadioButton('parent')}
              />
              parent
            </label>
          </Wrapper_Radio>
          <Wrapper_ID>
            <Input_ID placeholder="ID" maxLength="30" onChange={handleId} />
            <Submit_ID_btn onClick={handleIdValidate}>
              {' '}
              아이디 중복 확인{' '}
            </Submit_ID_btn>
          </Wrapper_ID>
          <Input_PW onChange={onChangePW} />

          <PW_policy_container>
            <PW_poclicy_item>
              <span>
                <FiCheck /> 숫자
              </span>
            </PW_poclicy_item>
            <PW_poclicy_item>
              <span>
                <FiCheck /> 특수문자
              </span>
            </PW_poclicy_item>
            <PW_poclicy_item>
              <span>
                <FiCheck /> 영문
              </span>
            </PW_poclicy_item>
            <PW_poclicy_item>
              <span>
                <FiCheck /> 8자리 이상
              </span>
            </PW_poclicy_item>
          </PW_policy_container>

          <Input_PW_confirm onChange={onChangePwconfirm} />
          <Input_name onChange={onChangeName} />
          <Input_age onChange={onChangeAge} />

          <Address_container>
            <Address_title>주소</Address_title>
            <Wrapper_ZipCode>
              <ZipCode value={userInfo.zcode} />
              <Button_ZipCode_find onClick={addrBtnEvent}>
                우편번호 찾기{' '}
              </Button_ZipCode_find>
            </Wrapper_ZipCode>

            <Wrapper_addr>
              <Street_addr value={userInfo.roadAddr} />
              <Lot_addr value={userInfo.jibunAddr} />
            </Wrapper_addr>

            <Wrapper_addr>
              <Detailed_addr
                value={userInfo.detailAddr}
                onChange={handleChange}
              />
              {/* <Note_addr /> */}
            </Wrapper_addr>
          </Address_container>
          <Button_credit onClick={openModal}>신용카드 등록</Button_credit>
          <Submit_SignUp_btn onClick={signupBtnEvnt}>
            가입하기
          </Submit_SignUp_btn>
        </Wrap>
      </Container>
      <Modal show={showModal} onClose={closeModal}>
        <CreditCardForm />
      </Modal>
    </>
  );
}

const {
  Container,
  Wrap,
  Title,
  Wrapper_Radio,
  Wrapper_ID,
  Input_ID,
  Submit_ID_btn,
  Input_PW,
  PW_policy_container,
  PW_poclicy_item,
  Input_PW_confirm,
  Submit_SignUp_btn,
  Input_name,
  Input_age,
  Button_credit,
  Address_container,
  Wrapper_ZipCode,
  ZipCode,
  Address_title,
  Button_ZipCode_find,
  Wrapper_addr,
  Street_addr,
  Lot_addr,
  Detailed_addr,
  Input_Radio,
  // Note_addr,
} = style;
