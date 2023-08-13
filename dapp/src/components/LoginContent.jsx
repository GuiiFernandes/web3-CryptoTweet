'use client';

import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { FaTwitter } from 'react-icons/fa';

import Context from '../context/Context';
import { doLogin } from '../services/web3Service';

export default function LoginContent() {
  const { push } = useRouter();
  const { message, setMessage } = useContext(Context);

  const handleClick = async () => {
    try {
      setMessage('Conectando com MetaMask... Aguarde.');
      await doLogin();
      push('/timeline');
      setMessage('');
    } catch (error) {
      console.error(error);
      setMessage(error.message);
    }
  };

  return (
    <section className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3 text-info">
        <FaTwitter />
        {' '}
        CrypTwitter
      </h1>
      <p className="lead">
        Sua rede social descentralizada
      </p>
      <p className="lead mb-3">
        Autentique-se com sua carteira, escreva suas mensagens
        e saiba o que está acontecendo no mundo.
      </p>
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
      <p
        className={ `m-0 mt-3 text-center${message
          .includes('Aguarde') ? '' : ' text-danger'}` }
      >
        {message}
      </p>
    </section>
  );
}
