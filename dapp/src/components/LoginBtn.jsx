import React from 'react';

export default function LoginBtn() {
  return (
    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
      <button
        type="button"
        className="btn btn-primary btn-lg px-4 me-md-2"
      >
        <img
          src="/metamask.svg"
          alt="MetaMask logo"
          width="50"
        />
        <span className="ms-2 fw-bolder">Conectar com MetaMask</span>
      </button>
    </div>
  );
}
