import React, { useRef, useState } from 'react';
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

const numberRegex = new RegExp(/\d*/g);
const addSpaceBetween = (str, sliceNumber) => {
  let result = '';
  let startIndex = 0;
  let endIndex = sliceNumber;
  const onlyNumber = str.match(numberRegex).join('');

  for (let i = 0; i <= str.length / sliceNumber; i++) {
    result += onlyNumber.slice(startIndex, endIndex) + ' ';
    startIndex += sliceNumber;
    endIndex += sliceNumber;
  }
  return result.trim();
};

const limitLength = (target, limitNumber) => {
  return String(target).slice(0, limitNumber);
};

export default function CreditCardForm() {
  const cardNumberRef = useRef();

  const [cardInput, setCardInput] = useState({
    cardNumber: '',
    holderName: '',
    expired: '',
    CVC: '',
  });

  const handleCardNumber = (e) => {
    const cardNumber = limitLength(addSpaceBetween(e.target.value, 4), 19);
    cardNumberRef.current.value = cardNumber;
    setCardInput({ ...cardInput, cardNumber: cardNumber.replaceAll(' ', '-') });
  };

  return (
    <Container>
      <Wrap>
        <Row>
          <Title>신용카드 정보 입력</Title>
        </Row>
        <Row>
          <CardNumberInput ref={cardNumberRef} onChange={handleCardNumber} />
        </Row>
        <Row>
          <HolderNameInput name="holderName" placeholder="이름" />
        </Row>
        <Row>
          <SelectInput defaultValue="">
            <SelectOption name="expired" value="" disabled>
              MM
            </SelectOption>
            {EXPIRATION_MONTHS.map((month) => (
              <SelectOption key={month} value={month}>
                {month.toString().padStart(2, '0')}
              </SelectOption>
            ))}
          </SelectInput>
          <SelectInput defaultValue="">
            <SelectOption value="" disabled>
              YY
            </SelectOption>
            {EXPIRATION_YEARS.map((year) => (
              <SelectOption key={year} value={year}>
                {year.toString().substring(2)}
              </SelectOption>
            ))}
          </SelectInput>
          <CVCInput name="CVC" placeholder="CVC" />
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
