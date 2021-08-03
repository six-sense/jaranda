import React, { useState } from 'react'; // , { useState }
import { style } from './LoginPageStyle';
import { Validation } from 'utils/checkValid';

export default function Login() {
  const [isVaild, setIsVaild] = useState(true);
  const [inputIdValue, setInputIdValue] = useState();
  const [inputPwValue, setInputPwValue] = useState();
  const { checkId, checkPassword } = Validation;
  // const idRef =  useRef();
  // const pwRef = useRef();

  const loginEventHandler = (e) => {
    checkId(e.target.value), checkPassword(e.target.value);
  };

  const handleIdInput = (e) => {
    setInputIdValue(e.target.value), loginEventHandler(e);
  };

  const handlePwInput = (e) => {
    setInputPwValue(e.target.value), loginEventHandler(e);
  };

  const removeInputText = () => {
    setInputIdValue('');
    setInputPwValue('');
  };

  const checkLogin = () => {
    if (isVaild === true) {
      // if (
      //   localStorage.getItem(inputIdValue) &&
      //   localStorage.getItem(inputPwValue)
      // )
      localStorage.setItem('token', { userId: 'jung', role: 'teacher' });
      removeInputText();
    } else {
      setIsVaild(true);
      setTimeout(() => {
        setIsVaild(false);
      }, 6000);

      removeInputText();
    }
  };

  return (
    <Container>
      <Wrap>
        <Title>로그인</Title>
        {isVaild && (
          <VaildMessage>
            유효한 아이디 또는 비밀번호를 입력해주세요
          </VaildMessage>
        )}

        <IdInput onChange={handleIdInput} value={inputIdValue} />
        <PasswordInput onChange={handlePwInput} value={inputPwValue} />
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
