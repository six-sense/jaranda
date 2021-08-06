import React, { useState, useEffect } from 'react';
import { style } from './CreditCardFormStyle';
import PropTypes from 'prop-types';
import {
  addSeparatorBetweenNumber,
  getOnlyNumber,
  limitLength,
  validateExpiration,
} from './utils/cardValidation';
import ToastForm from 'Components/ToastForm';

const INPUT_NAMES = {
  CARD_NUMBER: 'cardNumber',
  HOLDER_NAME: 'holderName',
  EXPIRED: 'expired',
  CVC: 'CVC',
};

export default function CreditCardForm({
  closeModal,
  creditCard,
  handleCardInput,
}) {
  const { cardNumber, holderName, expired, CVC } = creditCard;

  const [cardInput, setCardInput] = useState({
    cardNumber: addSeparatorBetweenNumber(cardNumber, 4, ' '),
    holderName,
    expired: addSeparatorBetweenNumber(expired, 2, '/'),
    CVC,
  });

  const [toast, setToast] = useState({
    status: false,
    msg: '',
  });

  useEffect(() => {
    if (toast.status) {
      const timeInterver = setTimeout(() => {
        setToast({ ...toast, status: false });
      }, 2000);
      return () => clearTimeout(timeInterver);
    }
  }, [toast]);

  const onChange = (e) => {
    switch (e.target.name) {
      case INPUT_NAMES.CARD_NUMBER:
        setCardInput({
          ...cardInput,
          cardNumber: limitLength(
            addSeparatorBetweenNumber(e.target.value, 4, ' '),
            19,
          ),
        });
        break;

      case INPUT_NAMES.HOLDER_NAME:
        setCardInput({ ...cardInput, holderName: e.target.value });
        break;

      case INPUT_NAMES.EXPIRED:
        setCardInput({
          ...cardInput,
          expired: limitLength(
            addSeparatorBetweenNumber(e.target.value, 2, '/'),
            5,
          ),
        });
        break;

      case INPUT_NAMES.CVC:
        setCardInput({
          ...cardInput,
          CVC: limitLength(getOnlyNumber(e.target.value), 3),
        });
        break;
    }
  };

  const onSubmit = () => {
    const { cardNumber, holderName, expired, CVC } = cardInput;

    if (cardNumber.length < 19) {
      setToast({
        ...toast,
        status: true,
        msg: '유효한 카드 번호를 입력해주세요.',
      });
      return;
    } else if (holderName.length < 1) {
      setToast({
        ...toast,
        status: true,
        msg: '이름을 입력해주세요.',
      });
      return;
    } else if (!(expired.length === 5 && validateExpiration(expired))) {
      setToast({
        ...toast,
        status: true,
        msg: '유효한 카드 유효기간을 입력해주세요.',
      });
      return;
    } else if (CVC.length < 3) {
      setToast({
        ...toast,
        status: true,
        msg: '유효한 CVC를 입력해주세요.',
      });
      return;
    }

    handleCardInput({
      cardNumber: cardNumber.replaceAll(' ', '-'),
      holderName,
      expired: expired.replace('/', ''),
      CVC,
    });
    closeModal();
  };

  return (
    <Container>
      <Wrap>
        <Row>
          <Title>신용카드 정보 입력</Title>
        </Row>
        <Row>
          <CardNumberInput
            name={INPUT_NAMES.CARD_NUMBER}
            value={cardInput.cardNumber}
            onChange={onChange}
          />
        </Row>
        <Row>
          <HolderNameInput
            name={INPUT_NAMES.HOLDER_NAME}
            value={cardInput.holderName}
            onChange={onChange}
          />
        </Row>
        <Row>
          <ExpiredInput
            name={INPUT_NAMES.EXPIRED}
            value={cardInput.expired}
            onChange={onChange}
          />
          <CVCInput
            name={INPUT_NAMES.CVC}
            value={cardInput.CVC}
            onChange={onChange}
          />
        </Row>
        <Row>
          <CancelButton onClick={closeModal}>취소</CancelButton>
          <CreditButton onClick={onSubmit}>등록</CreditButton>
        </Row>
      </Wrap>
      <ToastForm show={toast.status} contents={toast.msg} />
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
  creditCard: PropTypes.object,
  handleCardInput: PropTypes.func,
};
