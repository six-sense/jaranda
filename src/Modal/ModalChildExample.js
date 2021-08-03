import React, { useRef } from 'react';
import PropTypes from 'prop-types';

// Modal Child Sample
function ModalChildExample({ handleTextInput }) {
  const inputRef = useRef();

  const onClick = () => {
    const value = inputRef.current.value;
    handleTextInput(value);
  };

  return (
    <div style={{ height: '30px' }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="입력..."
        style={{ border: '1px solid black' }}
      ></input>
      <button
        type="submit"
        onClick={onClick}
        style={{
          marginLeft: '1em',
          border: '1px solid black',
        }}
      >
        확인
      </button>
    </div>
  );
}

export default ModalChildExample;

ModalChildExample.propTypes = {
  handleTextInput: PropTypes.func,
};
