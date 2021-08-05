import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

export const Wrap = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  max-width: 480px;
  width: 480px;
  margin: 48px 0;
  padding: 0 15px;
`;

export const Title = styled.div`
  font-size: 24px;
  margin-bottom: 48px;
  text-align: center;
`;

export const Wrapper_CheckBox = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding-left: 8px;

  label {
    display: flex;
  }

  span {
    padding-left: 5px;
  }
`;

export const Wrapper_ID = styled.div`
  display: flex;
  width: 100%;
  line-height: 1;
`;

export const Input_Radio = styled('input')``;

export const Input = styled.input`
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  height: 44px;
  margin-bottom: 16px;
  background-color: #fff;
  font-size: 12px;
  border: 1px solid rgba(154, 154, 154, 0.5);
  border-radius: 2px;
  -webkit-appearance: none !important;
  outline: none;
  opacity: 1 !important;
  &:focus,
  &:hover {
    color: #6dc043;
    border: solid 1px #a5d25f;
    background-color: rgba(165, 210, 95, 0.1);
  }
`;

export const Input_ID = styled(Input).attrs({
  type: 'text',
  placeholder: '아이디',
})``;

export const Input_PW = styled(Input).attrs({
  type: 'password',
  placeholder: '비밀번호',
})``;

export const Input_PW_confirm = styled(Input).attrs({
  type: 'password',
  placeholder: '비밀번호 확인',
})``;

export const Input_name = styled(Input).attrs({
  type: 'text',
  placeholder: '성명',
})``;

export const Input_age = styled(Input).attrs({
  type: 'text',
  placeholder: '나이',
})``;

export const Button = styled.div`
  ${({ theme }) => theme.flexSet()};
  height: 44px;
  background-color: #0085fd;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  border-radius: 6px;
`;

export const Submit_ID_btn = styled(Button)`
  flex: none;
  width: 136px;
  margin-left: 8px;
`;

export const Submit_SignUp_btn = styled(Button)`
  margin-top: 20px;
  width: 100%;
`;

export const Button_credit = styled(Button)`
  margin-top: 20px;
  width: 120px;
  margin-right: auto;
  background-color: darkorange;
  border-radius: 4px;
  height: 40px;
`;

export const PW_policy_container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export const PW_poclicy_item = styled.div`
  float: left;
  margin-right: 11px;
`;

export const Address_container = styled.div`
  width: 100%;
`;

export const Address_title = styled.div`
  font-size: 13px;
  margin-bottom: 15px;
  margin-top: 20px;
  font-weight: 600;
`;

export const Wrapper_ZipCode = styled.div`
  display: flex;
  width: 50%;
  margin-bottom: 6px;
`;

export const ZipCode = styled(Input).attrs({
  type: 'text',
  placeholder: '우편 번호',
})`
  height: 30px;
`;

export const Button_ZipCode_find = styled(Button)`
  width: 100%;
  height: 30px;
  margin-left: 10px;
`;

export const Wrapper_addr = styled(Wrapper_ZipCode)`
  width: 100%;
`;

export const Street_addr = styled(Input).attrs({
  type: 'text',
  placeholder: '도로명 주소',
})`
  height: 30px;
`;

export const Lot_addr = styled(Input).attrs({
  type: 'text',
  placeholder: '지번 주소',
})`
  height: 30px;
  margin-left: 4px;
`;

export const Detailed_addr = styled(Input).attrs({
  type: 'text',
  placeholder: '상세 주소',
})`
  height: 30px;
`;

export const Note_addr = styled(Input).attrs({
  type: 'text',
  placeholder: '참고 사항',
})`
  height: 30px;
  width: 60%;
  margin-left: 4px;
`;

export const style = {
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
  Wrapper_CheckBox,
  Input_Radio,
};
