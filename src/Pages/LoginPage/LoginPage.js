import React, { useState } from 'react';
import { Validation } from 'utils/checkValid';
import { style } from './LoginPageStyle';

export default function Login() {
  const { checkId, checkPassword } = Validation;
  // const [isVaild, setIsVaild] = useState(false);
  const [inputIdValue, setInputIdValue] = useState('');
  const [inputPwValue, setInputPwValue] = useState('');

  const handleIdInput = (e) => {
    console.log(e);
    const { value } = e.target;
    if (checkId(value)) {
      setInputIdValue(value);
    }
  };

  const handlePwInput = (e) => {
    const { value } = e.target;
    if (checkPassword(value)) {
      setInputPwValue(value);
    }
  };

  return (
    <Container>
      <Wrap>
        <Title>로그인</Title>
        {/* {isVaild && (
          <VaildMessage>
            유효한 아이디 또는 비밀번호를 입력해주세요
          </VaildMessage>
        )} */}
        <IdInput onChange={(e) => handleIdInput(e)} value={inputIdValue} />
        <PasswordInput
          onChange={(e) => handlePwInput(e)}
          value={inputPwValue}
        />
        <LoginButton>로그인</LoginButton>
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
  // VaildMessage,
  IdInput,
  PasswordInput,
  LoginButton,
  Bar,
  SignButton,
} = style;
