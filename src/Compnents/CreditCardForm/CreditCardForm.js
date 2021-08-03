import React, { useRef, useState } from 'react';
import { style } from './CreditCardFormStyle';
import PropTypes from 'prop-types';

const addSeparatorBetween = (str, sliceNumber, separator) => {
  let result = '';
  let startIndex = 0;
  let endIndex = sliceNumber;
  const onlyNumber = getOnlyNumber(str);

  let count = 0;
  const condition = onlyNumber.length / sliceNumber;
  for (let i = count; i <= condition; i++) {
    result += onlyNumber.slice(startIndex, endIndex) + separator;
    startIndex += sliceNumber;
    endIndex += sliceNumber;
    count = i;
  }
  const separatorRegex = new RegExp(`${separator}*$`);
  return result.replace(separatorRegex, '');
};

const getOnlyNumber = (target) => {
  const numberRegex = new RegExp(/\d*/g);
  return target.match(numberRegex).join('');
};

const limitLength = (target, limitNumber) => {
  return String(target).slice(0, limitNumber);
};

const validateExpiration = (expired) => {
  const expirationRegex = new RegExp(/(0[1-9]|1[012])[/]\d\d/);
  const thisYear = new Date().getFullYear().toString().slice(2);
  if (expirationRegex.test(expired)) {
    return expired.slice(2) > thisYear ? true : false;
  }
};

export default function CreditCardForm({
  closeModal,
  handleCardInfo,
  creditCard,
  handleCardNumber,
  handleExpired,
}) {
  const cardNumberRef = useRef();
  const expiredRef = useRef();
  const cvcRef = useRef();

  const [cardInput, setCardInput] = useState({
    cardNumber: '',
    holderName: '',
    expired: '',
    CVC: '',
  });
  // const [flag, setFlag] = useState(false)
  // useEffect(()=>{

  // },[flag])

  const onClose = (bool) => {
    // let stuts=false
    bool ? (bool = true) : (bool = false);

    closeModal(bool);
  };

  const onCardNumber = (e) => {
    const cardNumber = limitLength(
      addSeparatorBetween(e.target.value, 4, ' '),
      19,
    );
    cardNumberRef.current.value = cardNumber;
    if (cardNumber.length === 19) {
      setCardInput({ ...cardInput, cardNumber });
      handleCardNumber(cardNumber.replaceAll(' ', '-'));
    } else {
      // To Do : 실패 메시지
    }
  };

  const onExpired = (e) => {
    const expired = limitLength(addSeparatorBetween(e.target.value, 2, '/'), 5);
    expiredRef.current.value = expired;
    if (expired.length === 5) {
      if (validateExpiration(expired)) {
        setCardInput({ ...cardInput, expired });
        handleExpired(expired.replace('/', ''));
      } else {
        // To Do : 실패 메시지
      }
    }
  };

  const onUserInfo = (e) => {
    let cvc;
    switch (e.target.id) {
      case 'name':
        setCardInput({ ...cardInput, holderName: e.target.value });
        handleCardInfo(cardInput);
        break;
      case 'cvc':
        cvc = limitLength(getOnlyNumber(e.target.value), 3);
        cvcRef.current.value = cvc;
        setCardInput({
          ...cardInput,
          CVC: cvc,
        });
        handleCardInfo(cardInput);
        break;
    }
  };

  return (
    <Container>
      <Wrap>
        <Row>
          <Title>신용카드 정보 입력</Title>
        </Row>
        <Row>
          <CardNumberInput
            ref={cardNumberRef}
            defaultValue={addSeparatorBetween(creditCard.cardNumber, 4, ' ')}
            onChange={onCardNumber}
          />
        </Row>
        <Row>
          <HolderNameInput
            id={'name'}
            defaultValue={creditCard.holderName}
            name="holderName"
            onChange={onUserInfo}
          />
        </Row>
        <Row>
          <ExpiredInput
            ref={expiredRef}
            defaultValue={addSeparatorBetween(creditCard.expired, 2, '/')}
            onChange={onExpired}
          />
          <CVCInput
            id={'cvc'}
            ref={cvcRef}
            defaultValue={creditCard.CVC}
            name="CVC"
            onChange={onUserInfo}
          />
        </Row>
        <Row>
          <CancelButton onClick={() => onClose(false)}>취소</CancelButton>
          <CreditButton onClick={() => onClose(true)}>등록</CreditButton>
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
  ExpiredInput,
  CVCInput,
  CancelButton,
  CreditButton,
} = style;

CreditCardForm.propTypes = {
  closeModal: PropTypes.func,
  handleCardInfo: PropTypes.func,
  creditCard: PropTypes.object,
  handleCardNumber: PropTypes.func,
  handleExpired: PropTypes.func,
};
