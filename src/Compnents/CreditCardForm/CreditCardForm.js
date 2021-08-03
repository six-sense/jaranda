import React from 'react';
import { style } from './CreditCardFormStyle';

const getExpirationMonths = () => {
  let result = [];
  for (let i = 1; i <= 12; i++) {
    result.push(i);
  }
  return result;
};

const getExpirationYears = (endYear) => {
  let result = [];
  for (let i = new Date().getFullYear(); i <= endYear; i++) {
    result.push(i);
  }
  return result;
};

const EXPIRATION_MONTHS = getExpirationMonths();

const EXPIRATION_END_YEAR = new Date().getFullYear() + 11;
const EXPIRATION_YEARS = getExpirationYears(EXPIRATION_END_YEAR);

export default function CreditCardForm() {
  return (
    <Container>
      <Wrap>
        <Row>
          <Title>신용카드 정보 입력</Title>
        </Row>
        <Row>
          <CardNumberInput />
        </Row>
        <Row>
          <HolderNameInput type="text" placeholder="이름" />
        </Row>
        <Row>
          <SelectInput>
            <SelectOption value="" disabled selected>
              MM
            </SelectOption>
            {EXPIRATION_MONTHS.map((month) => (
              <SelectOption key={month} value={month}>
                {month.toString().padStart(2, '0')}
              </SelectOption>
            ))}
          </SelectInput>
          <SelectInput>
            <SelectOption value="" disabled selected>
              YY
            </SelectOption>
            {EXPIRATION_YEARS.map((year) => (
              <SelectOption key={year} value={year}>
                {year.toString().substring(2)}
              </SelectOption>
            ))}
          </SelectInput>
          <CVCInput type="text" placeholder="CVC" />
        </Row>
        <Row>
          <CancelButton>취소</CancelButton>
          <CreditButton>등록</CreditButton>
        </Row>
      </Wrap>
    </Container>
  );
}

const {
  Container,
  Wrap,
  Row,
  Title,
  CardNumberInput,
  HolderNameInput,
  SelectInput,
  SelectOption,
  CVCInput,
  CancelButton,
  CreditButton,
} = style;
