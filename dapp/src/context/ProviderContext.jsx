'use client';

import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';

import Context from './Context';

export default function ProviderContext({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');
  const [message, setMessage] = useState('');

  const store = useMemo(() => ({
    theme,
    setTheme,
    message,
    setMessage,
  }), [theme, message]);

  return (
    <Context.Provider value={ store }>
      {children}
    </Context.Provider>
  );
}

ProviderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
