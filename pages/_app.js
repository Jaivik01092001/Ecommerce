import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';
import { StateContext } from '../context/StateContext';
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  const domain = 'dev-j3y4qc6wz2ceghum.us.auth0.com';
  const clientId = 'Jj8LjxRKd8VZ4o3ciBJYqRkFVXHpWVTi';
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={typeof window !== 'undefined' && window.location.origin}
    >
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    </Auth0Provider>
  )
}

export default MyApp
