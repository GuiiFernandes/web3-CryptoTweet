import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { generateAvatarURL } from '@cfx-kit/wallet-avatar';

import Context from '../context/Context';

const MS = 1000;
const flex = 'd-flex align-items-start gap-4';

export default function TweetCard({ data }) {
  const { theme } = useContext(Context);
  return (
    <div className={ `px-2 py-4 border-bottom border-light-subtle ${flex}` }>
      <img
        className="rounded-circle align-self-center"
        width="49"
        src={ generateAvatarURL(data.author.toString()) }
        alt="profile"
      />
      <div>
        <p className="m-0">
          <span className="fw-bold">{data.username}</span>
          {' '}
          <span className={ `text-${theme === 'dark' ? 'white' : 'black'}-50 ms-1` }>
            {`@${data.author}`}
          </span>
        </p>
        <p
          className={ `text-${theme === 'dark' ? 'white' : 'black'}-50 m-0` }
          style={ { fontSize: '10px' } }
        >
          {`publicado: ${new Date(Number(data.timestamp) * MS).toLocaleString()}`}
        </p>
        <p className="m-0">{data.text}</p>
      </div>
    </div>
  );
}

TweetCard.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};
