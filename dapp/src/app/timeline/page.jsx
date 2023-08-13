'use client';

import { useContext, useEffect } from 'react';

import TweetCard from '../../components/TweetCard';
import FormTweet from '../../components/FormTweet';
import PageLayout from '../../components/PageLayout';
import { getLastTweets } from '../../services/web3Service';
import Context from '../../context/Context';

const TWEETS_PAGE = 10;

export default function Timeline() {
  const { tweets, setTweets, page, setPage, status, setStatus } = useContext(Context);

  const loadTweets = async (pageParam = 1) => {
    try {
      const results = await getLastTweets(pageParam);
      if (!results.length) return setStatus('Nenhum tweet encontrado. Faça o seu!');
      if (pageParam > 1) {
        setTweets([...tweets, ...results]);
      } else {
        setTweets(results);
      }
      setStatus('');
    } catch (error) {
      console.error(error);
      setStatus(error.message);
    }
  };

  useEffect(() => {
    (async () => {
      await loadTweets(page);
    })();
  }, [page]);

  const hadleLoadMore = () => {
    console.log('hadleLoadMore');
    setPage(page + 1);
  };

  return (
    <PageLayout>
      <main className="container">
        <div className="row">
          <FormTweet />
          { !status ? tweets.map((tweet) => (
            <TweetCard key={ Number(tweet.timestamp) } data={ tweet } />
          )) : (
            <span
              className={ `m-0 text-center ${status
                .includes('Carregando' || 'Nenhum tweet encontrado')
                ? '' : 'text-danger'}` }
            >
              {status}
            </span>
          )}
        </div>
        <div className="row d-flex justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-info"
            style={ {
              maxWidth: '200px',
              display: `${(tweets.length
                && tweets.length % TWEETS_PAGE === 0)
                ? 'block' : 'none'}`,
            } }
            onClick={ hadleLoadMore }
          >
            Carregar mais
          </button>
        </div>
      </main>
    </PageLayout>
  );
}
