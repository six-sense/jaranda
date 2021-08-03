<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
import { Validation } from 'utils/checkValid';
import { style } from './LoginPageStyle';

export default function Login() {
  const { checkId, checkPassword } = Validation;
  const [inputIdValue, setInputIdValue] = useState('');
  const [inputPwValue, setInputPwValue] = useState('');
  const [isVaild, setIsVaild] = useState(false);

  const handleIdInput = (e) => {
    const { value } = e.target;
    if (checkId(value)) {
      setInputIdValue(value);
    }
>>>>>>> a9f624d7a8b9a5c9f722a5815b309b00cd66e83f
  };

  console.log(inputIdValue);

  const handlePwInput = (e) => {
<<<<<<< HEAD
    setInputPwValue(e.target.value);
=======
    const { value } = e.target;
    if (checkPassword(value)) {
      setInputPwValue(value);
    }
>>>>>>> a9f624d7a8b9a5c9f722a5815b309b00cd66e83f
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
<<<<<<< HEAD
        setIsVaild(false);
      }, 2000);
=======
        setIsVaild(true);
      }, 6000);

      removeInputText();
>>>>>>> a9f624d7a8b9a5c9f722a5815b309b00cd66e83f
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
<<<<<<< HEAD

        <IdInput onChange={(e) => handleIdInput(e)} />
        <PasswordInput onChange={(e) => handlePwInput(e)} />
=======
        <IdInput onChange={(e) => handleIdInput(e)} value={inputIdValue} />
        <PasswordInput
          onChange={(e) => handlePwInput(e)}
          value={inputPwValue}
        />
>>>>>>> a9f624d7a8b9a5c9f722a5815b309b00cd66e83f
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
