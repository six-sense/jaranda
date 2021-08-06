import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { style } from './ModalStyle';
import { AiOutlineClose } from 'react-icons/ai';

export default function Modal({ show, onClickClose, children, accountStyle }) {
  return ReactDom.createPortal(
    <>
      {show && (
        <>
          <Overlay>
            <Container>
              <Wrap accountStyle={accountStyle}>
                <Header>
                  <ModalClose onClick={onClickClose}>
                    <AiOutlineClose size={18} />
                  </ModalClose>
                </Header>
                <Contents>{children}</Contents>
              </Wrap>
            </Container>
          </Overlay>
        </>
      )}
    </>,
    document.getElementById('modal-root'),
  );
}

Modal.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  accountStyle: PropTypes.bool,
};

const { Overlay, Container, Wrap, Header, ModalClose, Contents } = style;
