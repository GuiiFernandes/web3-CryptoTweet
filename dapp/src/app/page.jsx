'use client';

import PageLayout from './components/PageLayout';
import LoginBtn from './components/LoginBtn';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <PageLayout>
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6 m-auto">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
              className="d-block mx-lg-auto img-fluid"
              alt="friends"
              width="700"
              height="500"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-info">

              CrypTwitter
            </h1>
            <p className="lead">
              Sua rede social descentralizada
            </p>
            <p className="lead mb-3">
              Autentique-se com sua carteira, escreva suas mensagens
              e saiba o que está acontecendo no mundo.
            </p>
            <LoginBtn />
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
