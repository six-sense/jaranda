import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'Modal';
import ModalChildExample from 'Modal/ModalChildExample';

// Modal Sample
function Help() {
  const [showModal, setShowModal] = useState(false);
  const [textInput, setTextInput] = useState('');

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleTextInput = (text) => {
    setTextInput(text);
    closeModal();
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '40px',
        height: '90vh',
      }}
    >
      <button onClick={openModal}>Show Modal</button>
      <Modal show={showModal} onClose={closeModal}>
        <ModalChildExample handleTextInput={handleTextInput} />
      </Modal>
      <span>{textInput}</span>
    </div>
  );
}

export default Help;

Help.propTypes = {
  openModal: PropTypes.func,
};
