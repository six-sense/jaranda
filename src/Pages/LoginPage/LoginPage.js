import React, { useState } from 'react'; // , { useState }
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Validation } from 'utils/checkValid';
import { LOCAL_STORAGE, ROUTES } from 'utils/constants';
import { style } from './LoginPageStyle';

export default function Login({ handleLogin }) {
  const [isValid, setIsValid] = useState(false);
  const [inputIdValue, setInputIdValue] = useState('');
  const [inputPwValue, setInputPwValue] = useState('');
  const history = useHistory();
  const { checkId, checkPassword } = Validation;

  const handleIdInput = (e) => {
    setInputIdValue(e.target.value);
  };

  const handlePwInput = (e) => {
    setInputPwValue(e.target.value);
  };

  const sendLogin = async (userID, userPW) => {
    const userInfo = await LOCAL_STORAGE.get('userData');
    let test =
      userInfo &&
      userInfo?.find(
        (data) => data.userId === userID && data.password === userPW,
      );

    if (test !== undefined) {
      await LOCAL_STORAGE.set('token', {
        userId: test.userId,
        role: test.role,
      });
      handleLogin();
      return true;
    }
    return false;
  };

  const checkLogin = async () => {
    const validLogin = sendLogin(inputIdValue, inputPwValue);
    if (
      checkId(inputIdValue) &&
      checkPassword(inputPwValue) &&
      inputIdValue !== '' &&
      inputPwValue !== ''
    ) {
      if (validLogin && (await LOCAL_STORAGE.get('token')?.role) === 'admin') {
        history.push(ROUTES.ADMIN);
      } else {
        history.push(ROUTES.MAIN);
      }
    } else {
      setIsValid(true);
      setTimeout(() => {
        setIsValid(false);
      }, 6000);
    }
  };

  return (
    <Container>
      <Wrap>
        <Title>로그인</Title>
        {isValid && (
          <VaildMessage>
            유효한 아이디 또는 비밀번호를 입력해주세요
          </VaildMessage>
        )}

        <IdInput onChange={(e) => handleIdInput(e)} />
        <PasswordInput onChange={(e) => handlePwInput(e)} />
        <LoginButton onClick={checkLogin}>로그인</LoginButton>
        <Bar />
        <SignButton to={ROUTES.SIGN_UP}>회원가입</SignButton>
      </Wrap>
    </Container>
  );
}

const {
  Container,
  Wrap,
  Title,
  VaildMessage,
  IdInput,
  PasswordInput,
  LoginButton,
  Bar,
  SignButton,
} = style;

Login.propTypes = {
  handleLogin: PropTypes.func,
};
