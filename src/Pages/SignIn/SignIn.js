import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Validation } from 'utils/checkValid';
import { LOCAL_STORAGE, ROUTES } from 'utils/constants';
import { style } from './SignInStyle';
import Layout from 'Components/Layout';

export default function SignIn() {
  const [isValid, setIsValid] = useState(false);
  const [inputIdValue, setInputIdValue] = useState('');
  const [inputPwValue, setInputPwValue] = useState('');
  const history = useHistory();
  const inputPw = useRef();
  const { checkId, checkPassword } = Validation;

  const onChangePwInput = (e) => {
    setInputIdValue(e.target.value);
  };

  const onChangeIdInput = (e) => {
    setInputPwValue(e.target.value);
  };

  const sendLogin = (userID, userPW) => {
    const userInfo = LOCAL_STORAGE.get('userData');
    let test =
      userInfo &&
      userInfo?.find(
        (data) => data.userId === userID && data.password === userPW,
      );

    if (test !== undefined) {
      LOCAL_STORAGE.set('token', {
        userId: test.userId,
        role: test.role,
      });

      return true;
    }
    return false;
  };

  const onClickCheckLogin = () => {
    if (
      checkId(inputIdValue) &&
      checkPassword(inputPwValue) &&
      inputIdValue !== '' &&
      inputPwValue !== ''
    ) {
      const validLogin = sendLogin(inputIdValue, inputPwValue);
      if (validLogin) {
        const tokenRole = LOCAL_STORAGE.get('token')?.role;
        if (tokenRole === 'admin') {
          history.push(ROUTES.ADMIN);
        } else if (tokenRole !== 'admin') {
          history.push(ROUTES.MAIN);
        }
        return;
      }
    }
    setIsValid(true);
    setTimeout(() => {
      setIsValid(false);
    }, 6000);
  };

  const onKeyPressEnterkey = (e) => {
    if (e.key === 'Enter') {
      e.target.placeholder === '아이디'
        ? inputPw.current.focus()
        : onClickCheckLogin();
    }
  };

  return (
    <Layout>
      <Container>
        <Wrap>
          <Title>로그인</Title>
          {isValid && (
            <VaildMessage>
              유효한 아이디 또는 비밀번호를 입력해주세요
            </VaildMessage>
          )}
          <IdInput
            onChange={(e) => onChangePwInput(e)}
            onKeyPress={onKeyPressEnterkey}
          />
          <PasswordInput
            onChange={(e) => onChangeIdInput(e)}
            onKeyPress={onKeyPressEnterkey}
          />
          <LoginButton onClick={onClickCheckLogin}>로그인</LoginButton>
          <Bar />
          <SignButton to={ROUTES.SIGN_UP}>회원가입</SignButton>
        </Wrap>
      </Container>
    </Layout>
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

SignIn.propTypes = {
  handleLogin: PropTypes.func,
};
