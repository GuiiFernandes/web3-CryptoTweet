'use client';

import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

export default function ProviderContext({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [message, setMessage] = useState('');
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('Carregando...');

  const store = useMemo(() => ({
    theme,
    setTheme,
    message,
    setMessage,
    tweets,
    setTweets,
    page,
    setPage,
    status,
    setStatus,
  }), [theme, message, tweets, page, status]);

  return (
    <Context.Provider value={ store }>
      {children}
    </Context.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
