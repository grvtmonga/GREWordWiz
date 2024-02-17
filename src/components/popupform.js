import React from 'react';
import Model from 'react-modal';
import './popupform.css';

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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontFamily: 'Roboto, sans-serif',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',

        },
      }}
    >
      <h1>Register</h1>
      <form className='form-signup'>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' placeholder='Name'  />

        <label htmlFor='email'>Email address</label>
        <input type='email' id='email' placeholder='Email' />

        <label htmlFor='password'>Password</label>
        <input type='password' id='password' placeholder='Password' />

        <label htmlFor='password-confirm'>Confirm Password</label>
        <input type='password' id='password-confirm' placeholder='Confirm Password' />

      </form>
      <button className='close-button' onClick={onClose}>
        Close
      </button>
    </Model>
  );
};

export default PopUpForm;
