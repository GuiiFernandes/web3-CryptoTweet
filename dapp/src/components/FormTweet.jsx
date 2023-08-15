import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaTwitter } from 'react-icons/fa';

import Context from '../context/Context';
import { addTweet, getLastTweets } from '../services/web3Service';

const MAX_LENGTH = 150;
const MIN_LENGTH = 3;
const UPDATE_TIME = 12000;

export default function FormTweet() {
  const { push } = useRouter();
  const { theme, message, setMessage, setPage, setTweets } = useContext(Context);
  const [styleMessage, setStyleMessage] = useState('');
  const [tweet, setTweet] = useState('');
  const styleTheme = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';

  useEffect(() => {
    const wallet = localStorage.getItem('wallet');
    if (!wallet) push('/');
  }, []);

  useEffect(() => {
    (async () => {
      if (message.includes('Tweet enviado, aguarde a confirmação da rede.')) {
        setTimeout(async () => {
          const results = await getLastTweets(1);
          setPage(1);
          setTweets(results);
          setMessage('');
        }, UPDATE_TIME);
      }
    })();
  }, [message]);

  const handleSubmit = async () => {
    try {
      setStyleMessage('');
      setMessage('Enviando tweet... Aguarde.');
      await addTweet(tweet);
      setStyleMessage('text-success');
      setTweet('');
      setMessage('Tweet enviado, aguarde a confirmação da rede.');
    } catch (error) {
      console.error(error);
      setStyleMessage('text-danger');
      setMessage(error.message);
    }
  };

  return (
    <form
      className="mb-4"
      onSubmit={ (e) => {
        e.preventDefault();
        handleSubmit();
      } }
    >
      <h1 className="display-5 fw-bold lh-1 mb-3 text-info">
        <FaTwitter />
        {' '}
        Bem-Vindo!
      </h1>
      <label htmlFor="floatingTextarea">
        O que está acontecendo?
      </label>
      <div className="input-group">
        <textarea
          className={ `form-control ${styleTheme}` }
          style={ { resize: 'none' } }
          id="floatingTextarea"
          maxLength="150"
          value={ tweet }
          onChange={ ({ target }) => setTweet(target.value) }
          aria-label="O que está acontecendo?"
        />
        <button
          className="btn btn-outline-info"
          id="button-addon2"
          disabled={ tweet.length < MIN_LENGTH }
        >
          Tweetar
        </button>
      </div>
      <div className="d-flex gap-3 justify-content-between align-items-center">
        <span className="ms-2" style={ { fontSize: '10px' } }>
          {`caracteres restantes: ${MAX_LENGTH - tweet.length}`}
        </span>
        <span
          className={ `m-0 text-center ${styleMessage}` }
        >
          {message}
        </span>
      </div>
    </form>
  );
}
