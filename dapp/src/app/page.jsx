import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

import LoginBtn from '../components/LoginBtn';

export default function Home() {
  return (
    <>
      <Head>
        <title>CrypTweet | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
              className="d-block mx-lg-auto img-fluid"
              alt="friends"
              width="700"
              height="500"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
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
    </>
  );
}
