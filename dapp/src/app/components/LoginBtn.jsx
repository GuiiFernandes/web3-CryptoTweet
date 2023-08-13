'use client';

import React, { useState } from 'react';
import { doLogin } from '../../services/web3Service';

export default function LoginBtn() {
  const [message, setMessage] = useState('');
  const [classMessage, setClassMessage] = useState('');

  const handleClick = async () => {
    try {
      setClassMessage('.text-white');
      setMessage('Conectando com MetaMask... Aguarde.');
      const account = await doLogin();
      setMessage(account);
      setClassMessage('text-success');
    } catch (error) {
      setMessage(error.message);
      setClassMessage('text-danger');
    }
  };

  return (
    <>
      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <button
          type="button"
          className="btn btn-info btn-lg px-4 me-md-2"
          onClick={ handleClick }
        >
          <img
            src="/metamask.svg"
            alt="MetaMask logo"
            width="50"
          />
          <span className="ms-2 fw-bolder">Conectar com MetaMask</span>
        </button>
      </div>
      <p className={ `m-0 mt-3 text-center ${classMessage}` }>
        {message}
      </p>
    </>
  );
}
