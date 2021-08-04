import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flexSet()};
  height: 100vh;
`;

export const Wrap = styled.div`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
  position: relative;
  width: 480px;
`;

export const Title = styled.div`
  font-size: 24px;
  margin-bottom: 48px;
`;

export const VaildMessage = styled.div`
  position: absolute;
  top: 35px;
  padding: 5px 12px;
  max-width: 290px;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border-radius: 20px;
  background-color: #00000060;
`;

export const Input = styled.input`
  width: 100%;
  height: 52px;
  font-size: 12px;
  padding-left: 24px;
  margin-bottom: 8px;
  outline-color: #87bf44;
  border: solid 1px #cccccc;
  border-radius: 2px;
  background-color: #ffffff;
  color: #0b0b0b;
  &:focus {
    color: #6dc043;
    border: solid 1px #a5d25f;
    background-color: rgba(165, 210, 95, 0.1);
  }
`;

export const IdInput = styled(Input).attrs({
  type: 'text',
  placeholder: '아이디',
})``;

export const PasswordInput = styled(Input).attrs({
  type: 'password',
  placeholder: '비밀번호',
  autocomplete: 'current-password',
})`
  margin-bottom: 30px;
`;

export const Button = styled.button`
  width: 100%;
  font-size: 12px;
  height: 44px;
  border-radius: 6px;
  color: #fff;
`;

export const LoginButton = styled(Button)`
  background-color: #87bf44;
`;

export const SignButton = styled(Button.withComponent(Link))`
  ${({ theme }) => theme.flexSet()};
  background-color: #3e82f8;
`;

export const Bar = styled.div`
  width: 100%;
  height: 1px;
  margin: 12px 0;
  background-color: #e5e5e5;
`;

export const style = {
  Container,
  Wrap,
  Title,
  VaildMessage,
  IdInput,
  PasswordInput,
  LoginButton,
  SignButton,
  Bar,
};
