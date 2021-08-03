import React, { useState, useRef } from 'react'; // , { useState }
import { style } from './LoginPageStyle';

export default function Login() {
  // const [isVaild, setIsVaild] = useState(false);
  const [inputIdValue, setInputIdValue] = useState();
  const [inputPwValue, setInputPwValue] = useState();
  const idRef = useRef();
  const pwRef = useRef();

  const loginEventHandler = (e) => {
    checkId(e.target.value);
    console.log(checkId(e.target.value));
    checkPassword(e);
  };

  const handleIdInput = (e) => {
    setInputIdValue(e.target.value), loginEventHandler(e);
  };

  const handlePwInput = (e) => {
    setInputPwValue(e.target.value), loginEventHandler(e);
  };

  // const removeInputText = () => {
  //   setInputIdValue('');
  //   setInputPwValue('');
  // };

  //비밀번호 유효성 검사
  const checkPassword = (e) => {
    var pwValid =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d!@#$%^&*+=-]{8,16}$/;

    pwValid.test(e);
  };

  // 이메일 유효성 검사
  const checkId = (e) => {
    var idValid =
      /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*[a-zA-Z]{4,26}$/;

    idValid.test(e);
  };

  const checkLogin = () => {
    console.log(checkId(inputIdValue));
    // if (
    //   checkId(inputIdValue) === true &&
    //   checkPassword(inputPwValue) === true
    // ) {
    //   // 로컬에서 검색 localStorage.getItem(id)
    //   localStorage.setItem({
    //     token: {
    //       id: 'ok',
    //       role: 'ok',
    //     },
    //   });
    //   removeInputText();
    // }
    // if (
    //   checkId(inputIdValue) === false &&
    //   checkPassword(inputPwValue) === false
    // ) {
    //   setIsVaild(true);
    //   removeInputText();
    // }
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

        <IdInput onChange={handleIdInput} value={inputIdValue} ref={idRef} />
        <PasswordInput
          onChange={handlePwInput}
          value={inputPwValue}
          ref={pwRef}
        />
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
  // VaildMessage,
  IdInput,
  PasswordInput,
  LoginButton,
  Bar,
  SignButton,
} = style;
