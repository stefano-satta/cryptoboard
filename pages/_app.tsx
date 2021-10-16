import '../styles/globals.css'
import type { AppProps } from 'next/app';
import RouterLayout from '../components/common/RouterLayout'
import React from 'react';


function MyApp({ Component, pageProps }: AppProps) {
  return (<>
    <RouterLayout>
      <Component {...pageProps} />
    </RouterLayout>
  </>)
}
export default MyApp
