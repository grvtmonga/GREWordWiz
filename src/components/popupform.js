import React, { useState } from 'react';
import Model from 'react-modal';

const PopUpForm = ({ isOpen, onClose }) => {
  return (
    <Model
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: {
          background: 'blur',
        },
        content: {
          width: '500px',
          height: '500px',
        },
      }}
    >
      <h1>Model body</h1>
      <button onClick={onClose}>Close Modal</button>
    </Model>
  );
};

export default PopUpForm;
