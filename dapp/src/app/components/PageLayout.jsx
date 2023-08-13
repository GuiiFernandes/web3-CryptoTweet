'use client';

import { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function PageLayout({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark');

  const styleTheme = theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark';
  const flex = 'd-flex justify-content-center align-items-center';

  return (
    <>
      <Head>
        <title>CrypTweet | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={ `m-0 px-4 py-5 min-vh-100 vw-100 ${styleTheme} ${flex}` }>
        <header className="position-fixed w-100 top-0">
          <label
            htmlFor="theme-switcher"
            className="position-fixed top-0 end-0 text-warning fs-3 m-3"
          >
            <input
              type="checkbox"
              id="theme-switcher"
              className="d-none"
              checked={ theme === 'dark' }
              onChange={ () => {
                const newTheme = theme === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
                localStorage.setItem('theme', newTheme);
              } }
            />
            { theme === 'dark' ? '🌙' : '☀️' }
          </label>
        </header>
        { children }
      </div>
    </>
  );
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
