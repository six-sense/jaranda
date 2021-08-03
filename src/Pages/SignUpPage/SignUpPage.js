import React from 'react';
import { style } from './SignUpPageStyle';
import { FiCheck } from 'react-icons/fi';

export default function SignUpPage() {
  return (
    <>
      <Container>
        <Wrap>
          <Title>
            10초 만에 가입하고
            <br /> 선생님 정보를 받아보세요
          </Title>

          <Wrapper_ID>
            <Input_ID placeholder="ID" maxLength="15" />
            <Submit_ID_btn> 아이디 중복 확인 </Submit_ID_btn>
          </Wrapper_ID>
          <Input_PW />

          <PW_policy_container>
            <PW_poclicy_item>
              <span><FiCheck/> 숫자</span>
            </PW_poclicy_item>
            <PW_poclicy_item>
              <span><FiCheck/> 특수문자</span>
            </PW_poclicy_item>
            <PW_poclicy_item>
              <span><FiCheck/> 영문</span>
            </PW_poclicy_item>
            <PW_poclicy_item>
              <span><FiCheck/> 8자리 이상</span>
            </PW_poclicy_item>
          </PW_policy_container>

          <Input_PW_confirm />
          <Input_name />
          <Input_age />

          <Address_container>
            <Address_title>주소</Address_title>
            <Wrapper_ZipCode>
              <ZipCode />
              <Button_ZipCode_find>우편번호 찾기 </Button_ZipCode_find>
            </Wrapper_ZipCode>

            <Wrapper_addr>
              <Street_addr />
              <Lot_addr />
            </Wrapper_addr>

            <Wrapper_addr>
              <Detailed_addr />
              <Note_addr />
            </Wrapper_addr>
          </Address_container>
          <Button_credit>신용카드 등록</Button_credit>
          <Submit_SignUp_btn>가입하기</Submit_SignUp_btn>
        </Wrap>
      </Container>
    </>
  );
}

const {
  Container,
  Wrap,
  Title,
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
  Note_addr,
} = style;
