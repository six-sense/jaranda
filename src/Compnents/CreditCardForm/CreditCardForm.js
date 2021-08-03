import React, { useRef, useState } from 'react';
import { style } from './CreditCardFormStyle';
import PropTypes from 'prop-types';

const numberRegex = new RegExp(/\d*/g);
const addSeparatorBetween = (str, sliceNumber, separator) => {
  let result = '';
  let startIndex = 0;
  let endIndex = sliceNumber;
  const onlyNumber = str.match(numberRegex).join('');
  for (let i = 0; i <= str.length / sliceNumber; i++) {
    result += onlyNumber.slice(startIndex, endIndex) + separator;
    startIndex += sliceNumber;
    endIndex += sliceNumber;
  }
  return result.trim();
};

const limitLength = (target, limitNumber) => {
  return String(target).slice(0, limitNumber);
};

export default function CreditCardForm({
  closeModal,
  handleCardInfo,
  creditCard,
  handleCardNumber,
}) {
  const cardNumberRef = useRef();
  const expiredRef = useRef();

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
    setCardInput({ ...cardInput, cardNumber });
    handleCardNumber(cardNumber);
  };

  const onExpired = (e) => {
    const expired = e.target.value;
    expiredRef.current.value = expired;
    setCardInput({ ...cardInput, expired });
  };

  const onUserInfo = (e) => {
    switch (e.target.id) {
      case 'name':
        setCardInput({ ...cardInput, holderName: e.target.value });
        handleCardInfo(cardInput);
        break;
      case 'cvc':
        setCardInput({ ...cardInput, CVC: e.target.value });
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
            defaultValue={creditCard.cardNumber}
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
            defaultValue={creditCard.expired}
            onChange={onExpired}
          />
          <CVCInput
            id={'cvc'}
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
  // children: PropTypes.oneOfType([
  //   PropTypes.arrayOf(PropTypes.node),
  //   PropTypes.node,
  // ]),
};
