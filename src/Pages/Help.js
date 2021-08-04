import React from 'react';
import PropTypes from 'prop-types';

function Help() {
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
      Help Page
    </div>
  );
}

export default Help;

Help.propTypes = {
  openModal: PropTypes.func,
};
