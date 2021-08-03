import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { style } from './ModalStyle';
import { AiOutlineClose } from 'react-icons/ai';

export default function Modal({ show, onClose, children }) {
  return ReactDom.createPortal(
    <>
      {show && (
        <>
          <Overlay />
          <Container>
            <Wrap>
              <Header>
                <ModalClose onClick={onClose}>
                  <AiOutlineClose size={18} />
                </ModalClose>
              </Header>
              <Contents>{children}</Contents>
            </Wrap>
          </Container>
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
};

const { Overlay, Container, Wrap, Header, ModalClose, Contents } = style;
