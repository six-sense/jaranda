import React, { useState } from 'react'; // , { useState }
import { useHistory } from 'react-router-dom';
import { Validation } from 'utils/checkValid';
import { LOCAL_STORAGE } from 'utils/constants';
import { style } from './LoginPageStyle';

export default function Login() {
  const [isVaild, setIsVaild] = useState(false);
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
    const test =
      userInfo &&
      userInfo?.find(
        (data) => data.userId === userID && data.password === userPW,
      );
    if (test !== undefined) {
      await LOCAL_STORAGE.set('token', {
        userId: test.userId,
        role: test.role,
      });
      return true;
    }
    return false;
  };

  const checkLogin = () => {
    const validLogin = sendLogin(inputIdValue, inputPwValue);
    if (
      (checkId(inputIdValue) === true, checkPassword(inputPwValue) === true)
    ) {
      if (validLogin && LOCAL_STORAGE.get('token').role === 'admin') {
        history.push('/admin');
      } else {
        history.push('/');
      }
    } else {
      setIsVaild(true);
      setTimeout(() => {
        setIsVaild(false);
      }, 6000);
    }
  };

  console.log(inputIdValue);
  return (
    <Container>
      <Wrap>
        <Title>로그인</Title>
        {isVaild && (
          <VaildMessage>
            유효한 아이디 또는 비밀번호를 입력해주세요
          </VaildMessage>
        )}

        <IdInput onChange={(e) => handleIdInput(e)} />
        <PasswordInput onChange={(e) => handlePwInput(e)} />
        <LoginButton onClick={checkLogin}>로그인</LoginButton>
        <Bar />
        <SignButton>회원가입</SignButton>
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
