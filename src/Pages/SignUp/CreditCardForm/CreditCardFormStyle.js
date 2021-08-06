import styled from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => theme.flexSet()};
`;

export const Wrap = styled.form`
  ${({ theme }) => theme.flexSet('center', 'center', 'column')};
`;

export const Row = styled.div`
  ${({ theme }) => theme.flexSet('', '', 'row')};
  width: 100%;
  padding: 0 5em;
`;

export const Title = styled.h1`
  font-size: 18px;
  margin-bottom: 1.2em;
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
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

export const CardNumberInput = styled(Input).attrs({
  type: 'text',
  placeholder: '카드 번호',
})``;

export const HolderNameInput = styled(Input).attrs({
  type: 'text',
  placeholder: '이름',
})``;

export const ExpiredInput = styled(Input).attrs({
  type: 'text',
  placeholder: 'MM/YY',
})``;

export const CVCInput = styled(Input).attrs({
  type: 'text',
  placeholder: 'CVC',
})`
  margin-left: 1em;
`;

export const Button = styled.button`
  margin-top: 1em;
  margin-bottom: 1em;
  font-size: 14px;
  text-align: center;
  padding: 0.7em 2em;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
`;

export const CancelButton = styled(Button).attrs({
  type: 'button',
})`
  margin-left: auto;
  background-color: #9a9a9a;
`;

export const CreditButton = styled(Button).attrs({
  type: 'button',
})`
  margin-left: 1em;
  background-color: darkorange;
`;

export const style = {
  Container,
  Wrap,
  Row,
  Title,
  CardNumberInput,
  HolderNameInput,
  ExpiredInput,
  CVCInput,
  CancelButton,
  CreditButton,
};
