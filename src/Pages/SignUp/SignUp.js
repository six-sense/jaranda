import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { style } from './SignUpStyle';
import { FiCheck } from 'react-icons/fi';
import get_address from './utils/get_address';
import userDataForm from 'utils/storage/userDataForm';
import setUserData from 'utils/setUserInfo';
import { Validation } from 'utils/checkValid';
import { LOCAL_STORAGE, ROUTES, MENUS, ROLES } from 'utils/constants';
import Modal from 'Modal';
import CreditCardForm from './CreditCardForm';
import ToastForm from 'Components/ToastForm';
import { useHistory } from 'react-router-dom';
import Layout from 'Components/Layout';

export default function SignUp({ accountPlus }) {
  const history = useHistory();
  const idInput = useRef();
  const pwInput = useRef();
  const pwConfirmInput = useRef();
  const nameInput = useRef();
  const ageInput = useRef();
  const [userPwconfirm, setUserPwConfirm] = useState('');
  const [isNumber, setIsNumber] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [isSpecial, setIsSpecial] = useState(false);
  const [isLength, setIsLength] = useState(false);
  const [isEngNum, setIsEngNum] = useState(false);
  const [isLenId, setIsLenId] = useState(false);
  const [isSpecialId, setIsSpecialId] = useState(false);
  const [isOverlap, setIsOverlap] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [inputChk, setInputChk] = useState({
    userId: false,
    password: false,
    password_confirm: false,
    name: false,
    age: false,
    creditCard: {
      cardNumber: false,
    },
    zcode: false,
  });
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
    role: ROLES.USER,
    zcode: '',
    roadAddr: '',
    jibunAddr: '',
    detailAddr: '',
    menubar: MENUS,
  });
  const [toast, setToast] = useState({
    status: false,
    msg: '',
  });

  const { checkIdSignUp, checkPasswordSignUp } = Validation;

  useEffect(() => {
    if (toast.status) {
      const timeInterver = setTimeout(() => {
        setToast((prevToast) => ({ ...prevToast, status: false }));
      }, 2000);
      return () => clearTimeout(timeInterver);
    }
  }, [toast]);

  useEffect(() => {
    if (userInfo.zcode) {
      setInputChk((prevInputChk) => ({
        ...prevInputChk,
        zcode: true,
      }));
      setToast((prevToast) => ({
        ...prevToast,
        status: true,
        msg: '????????? ?????????????????????.',
      }));
    }
  }, [userInfo.zcode]);

  useEffect(() => {
    if (userInfo.creditCard.cardNumber) {
      setInputChk((prevInputChk) => ({
        ...prevInputChk,
        creditCard: {
          cardNumber: true,
        },
      }));
      setToast((prevToast) => ({
        ...prevToast,
        status: true,
        msg: '????????? ?????????????????????.',
      }));
    }
  }, [userInfo.creditCard.cardNumber]);

  const inputCheck = (limit) => {
    const { userId, password, password_confirm, name, age, zcode, creditCard } =
      inputChk;
    const { cardNumber } = creditCard;
    let result = true;
    for (let i = 0; i < limit; i++) {
      if (i === 0 && !userId) {
        setToast({
          ...toast,
          status: true,
          msg: '?????? ?????? ????????? ???????????????.',
        });
        result = false;
      } else if (i === 1 && !password) {
        setToast({
          ...toast,
          status: true,
          msg: '??????????????? ?????? ??????????????????.',
        });
        result = false;
      } else if (i === 2 && !password_confirm) {
        setToast({
          ...toast,
          status: true,
          msg: '???????????? ????????? ????????????.',
        });
        result = false;
      } else if (i === 3 && !name) {
        setToast({
          ...toast,
          status: true,
          msg: '????????? ??????????????????.',
        });
        result = false;
      } else if (i === 4 && !age) {
        setToast({
          ...toast,
          status: true,
          msg: '????????? ??????????????????.',
        });
        result = false;
      } else if (i === 5 && !zcode) {
        setToast({
          ...toast,
          status: true,
          msg: '????????? ??????????????????',
        });
        result = false;
      } else if (i === 6 && !cardNumber) {
        setToast({
          ...toast,
          status: true,
          msg: '????????? ??????????????????.',
        });
        result = false;
      }
      if (!result) break;
    }
    return result;
  };

  const onChangeID = (e) => {
    const id = e.target.value;
    const regex1 = /[A-Za-z0-9]+/g;
    const regex2 = /[^???-??????-??????-???a-zA-Z0-9]+/gi;
    const regex3 = /[???-??????-??????-???]/;
    if (regex1.test(id)) {
      setIsEngNum(true);
    } else {
      setIsEngNum(false);
    }

    if (regex3.test(id)) {
      setIsEngNum(false);
    } else {
      setIsEngNum(true);
    }

    if (regex2.test(id)) {
      setIsSpecialId(true);
    } else {
      setIsSpecialId(false);
    }

    if (id.length >= 4) {
      setIsLenId(true);
    } else {
      setIsLenId(false);
    }

    setUserInfo({
      ...userInfo,
      userId: e.target.value,
    });
  };

  const onClickIdValid = () => {
    const checkValidId = checkIdSignUp(userInfo.userId);
    let userData = LOCAL_STORAGE.get('userData');

    const reduplication = userData.find(
      (data) => data.userId === userInfo.userId,
    );
    if (checkValidId && reduplication === undefined) {
      setToast({ ...toast, status: true, msg: '??????????????? ??????????????????.' });

      setInputChk({
        ...inputChk,
        userId: true,
      });
      setIsOverlap(userInfo.userId);
      return;
    } else if (!checkValidId) {
      setToast({
        ...toast,
        status: true,
        msg: '4?????? ??????, ?????? ?????? ???????????? ?????????????????? ????????????.',
      });
      setInputChk({
        ...inputChk,
        userId: false,
      });
      return;
    } else {
      setToast({ ...toast, status: true, msg: '????????? ??????????????????.' });
      setInputChk({
        ...inputChk,
        userId: false,
      });
    }
  };

  const onChangePW = (e) => {
    inputCheck(1);

    const pw = e.target.value;
    const regex1 = /[A-Za-z]+/;
    const regex2 = /[0-9]+/;
    const regex3 = /[!@#$%^*+=-]+/;

    if (regex1.test(pw)) {
      setIsEnglish(true);
    } else {
      setIsEnglish(false);
    }
    if (regex2.test(pw)) {
      setIsNumber(true);
    } else {
      setIsNumber(false);
    }
    if (regex3.test(pw)) {
      setIsSpecial(true);
    } else {
      setIsSpecial(false);
    }
    if (pw.length >= 8) {
      setIsLength(true);
    } else {
      setIsLength(false);
    }

    setUserInfo({
      ...userInfo,
      password: e.target.value,
    });

    HandleValidatePW(e.target.value);
  };

  const HandleValidatePW = (value) => {
    const checkValidPw = checkPasswordSignUp(value);

    if (checkValidPw) {
      setInputChk({
        ...inputChk,
        password: true,
      });
    } else if (!checkValidPw) {
      setInputChk({
        ...inputChk,
        password: false,
      });
    }
  };

  const onChangePwConfirm = (e) => {
    inputCheck(2);
    setUserPwConfirm(e.target.value);
    MatchPW(e.target.value);
  };

  const MatchPW = (value) => {
    if (value !== userInfo.password) {
      setToast({
        ...toast,
        status: true,
        msg: '??????????????? ???????????? ????????????.',
      });

      setInputChk({
        ...inputChk,
        password_confirm: false,
      });
    } else if (value === userInfo.password) {
      setToast({
        ...toast,
        status: true,
        msg: '??????????????? ???????????????.',
      });

      setInputChk({
        ...inputChk,
        password_confirm: true,
      });
    }
  };

  const onChangeName = (e) => {
    inputCheck(3);
    setUserInfo({
      ...userInfo,
      name: e.target.value,
    });
    if (e.target.value === '') {
      setInputChk({
        ...inputChk,
        name: false,
      });
    } else {
      setInputChk({
        ...inputChk,
        name: true,
      });
    }
  };

  const onChangeAge = (e) => {
    inputCheck(4);
    setUserInfo({
      ...userInfo,
      age: e.target.value,
    });

    if (e.target.value === '' || !userInfo) {
      setInputChk({
        ...inputChk,
        age: false,
      });
    } else if (e.target.value !== '') {
      setInputChk({
        ...inputChk,
        age: true,
      });
    }
  };

  const onClickAddrBtn = () => {
    get_address(userInfo, setUserInfo);
  };

  const onChangeDetailAddr = (e) => {
    setUserInfo({ ...userInfo, detailAddr: e.target.value });
    inputCheck(5);
  };

  const onChangeRoleAdmin = (e) => {
    let isAdmin = e.target.checked;

    isAdmin
      ? setUserInfo({
          ...userInfo,
          role: e.target.name,
        })
      : setUserInfo({
          ...userInfo,
          role: ROLES.USER,
        });
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleCardInput = (cardInput) => {
    setUserInfo({
      ...userInfo,
      creditCard: {
        ...userInfo.creditCard,
        cardNumber: cardInput.cardNumber,
        holderName: cardInput.holderName,
        expired: cardInput.expired,
        CVC: cardInput.CVC,
      },
    });
  };

  const signupBtnEvnt = () => {
    const { userId, password, name, age, role, menubar } = userInfo;
    const { cardNumber, holderName, expired, CVC } = userInfo.creditCard;
    const userAddr =
      userInfo.zcode + ' ' + userInfo.roadAddr + ' ' + userInfo.detailAddr;

    const check = inputCheck(7);

    if (inputChk.userId && isOverlap !== userId) {
      setInputChk({
        ...inputChk,
        userId: false,
      });
      setToast({ ...toast, status: true, msg: '???????????? ?????? ??????????????????!' });
      return;
    }

    if (check) {
      setToast({ ...toast, status: true, msg: '?????? ????????? ?????????????????????!' });
      inputData(
        userId,
        password,
        name,
        age,
        cardNumber,
        holderName,
        expired,
        CVC,
        role,
        userAddr,
        menubar,
      );
      setTimeout(() => {
        history.push(ROUTES.SIGN_IN);
      }, 1500);
    } else {
      const { userId, password, password_confirm, name, age } = inputChk;

      if (!userId) {
        idInput.current.focus();
      } else if (!password) {
        pwInput.current.focus();
      } else if (!password_confirm) {
        pwConfirmInput.current.focus();
      } else if (!name) {
        nameInput.current.focus();
      } else if (!age) {
        ageInput.current.focus();
      }
    }
  };

  const inputData = (
    userId,
    pw,
    name,
    age,
    cardNumber,
    holderName,
    expired,
    cvc,
    role,
    addr,
    menubar,
  ) => {
    const data = userDataForm(
      userId,
      pw,
      name,
      age,
      cardNumber,
      holderName,
      expired,
      cvc,
      role,
      addr,
      menubar,
    );
    return setUserData(data);
  };

  return (
    <Layout>
      <Container>
        <Wrap>
          {!accountPlus ? (
            <Title>???????????? ??????????????? ??????????????????.</Title>
          ) : (
            <>
              <Title>???????????? ?????? ?????? ????????????.</Title>
              <Wrapper_CheckBox>
                <label htmlFor="radio">
                  <Input_Radio
                    type="checkbox"
                    name="admin"
                    onChange={(e) => onChangeRoleAdmin(e)}
                  />
                  <span>Admin</span>
                </label>
              </Wrapper_CheckBox>
            </>
          )}

          <Wrapper_ID>
            <Input_ID
              placeholder="ID"
              maxLength="30"
              onChange={onChangeID}
              ref={idInput}
            />
            <Submit_ID_btn onClick={onClickIdValid}>
              ????????? ?????? ??????
            </Submit_ID_btn>
          </Wrapper_ID>
          <PW_policy_container>
            <PW_poclicy_item>
              <span>
                <FiCheck size="1rem" color={isLenId ? 'blue' : 'red'} /> 4??????
                ??????
              </span>
            </PW_poclicy_item>
            <PW_poclicy_item>
              <span>
                <FiCheck size="1rem" color={isEngNum ? 'blue' : 'red'} /> ??????
                ?????? ?????????
              </span>
            </PW_poclicy_item>
            <PW_poclicy_item>
              <span>
                <FiCheck size="1rem" color={isSpecialId ? 'red' : 'blue'} />{' '}
                ???????????? X
              </span>
            </PW_poclicy_item>
          </PW_policy_container>
          <Input_PW
            onChange={onChangePW}
            value={userInfo.password}
            ref={pwInput}
          />

          <PW_policy_container>
            <PW_poclicy_item>
              <span>
                <FiCheck size="1rem" color={isNumber ? 'blue' : 'red'} /> ??????
              </span>
            </PW_poclicy_item>
            <PW_poclicy_item>
              <span>
                <FiCheck size="1rem" color={isSpecial ? 'blue' : 'red'} />{' '}
                ????????????
              </span>
            </PW_poclicy_item>
            <PW_poclicy_item>
              <span>
                <FiCheck size="1rem" color={isEnglish ? 'blue' : 'red'} /> ??????
              </span>
            </PW_poclicy_item>
            <PW_poclicy_item>
              <span>
                <FiCheck size="1rem" color={isLength ? 'blue' : 'red'} /> 8??????
                ??????
              </span>
            </PW_poclicy_item>
          </PW_policy_container>

          <Input_PW_confirm
            onChange={onChangePwConfirm}
            value={userPwconfirm}
            ref={pwConfirmInput}
          />
          <Input_name
            onChange={onChangeName}
            value={userInfo.name}
            ref={nameInput}
          />
          <Input_age
            onChange={onChangeAge}
            value={userInfo.age}
            ref={ageInput}
          />

          <Address_container>
            <Address_title>??????</Address_title>
            <Wrapper_ZipCode>
              <ZipCode value={userInfo.zcode} readOnly />
              <Button_ZipCode_find onClick={onClickAddrBtn}>
                ???????????? ??????
              </Button_ZipCode_find>
            </Wrapper_ZipCode>

            <Wrapper_addr>
              <Street_addr value={userInfo.roadAddr} readOnly />
              <Lot_addr value={userInfo.jibunAddr} readOnly />
            </Wrapper_addr>

            <Wrapper_addr>
              <Detailed_addr
                value={userInfo.detailAddr}
                onChange={onChangeDetailAddr}
              />
            </Wrapper_addr>
          </Address_container>
          <Button_credit onClick={openModal}>???????????? ??????</Button_credit>
          <Submit_SignUp_btn onClick={signupBtnEvnt}>
            {!accountPlus ? '????????????' : '?????? ?????? ??????'}
          </Submit_SignUp_btn>
        </Wrap>
      </Container>
      <Modal show={showModal} onClickClose={closeModal}>
        <CreditCardForm
          closeModal={closeModal}
          creditCard={userInfo.creditCard}
          handleCardInput={handleCardInput}
        />
      </Modal>

      <ToastForm show={toast.status} contents={toast.msg} />
    </Layout>
  );
}

const {
  Container,
  Wrap,
  Title,
  Wrapper_CheckBox,
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
} = style;

SignUp.propTypes = {
  accountPlus: PropTypes.bool,
};
