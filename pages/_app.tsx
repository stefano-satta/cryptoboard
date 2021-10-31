import '../styles/globals.css'
import type { AppProps } from 'next/app';
import RouterLayout from '../components/common/RouterLayout'
import React, { useEffect } from 'react';
import useLoadingPage from '../hooks/useLoadingPage';
import Loading from '../components/common/Loading';


function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading, handleLoadingOnChangeRouting } = useLoadingPage();
  
  useEffect(() => {
    handleLoadingOnChangeRouting();

    return () => {}
  }, [])

  const ShowLoader = () => {
    return (
      <div className="w-100 d-flex justify-content-center align-items-center h-100">
        <Loading/>
      </div>
    )
  }



  return (<>
    <RouterLayout>
      { isLoading && <ShowLoader/>} 
      { !isLoading &&<Component {...pageProps} /> }
    </RouterLayout>
  </>)
}
export default MyApp
