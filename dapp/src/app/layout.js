import PropTypes from 'prop-types';

import ProviderContext from '../context/ProviderContext';
import 'bootstrap/dist/css/bootstrap.min.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-vh-100 w-100">
        <ProviderContext>
          {children}
        </ProviderContext>
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
