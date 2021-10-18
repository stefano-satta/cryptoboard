import type { GetServerSidePropsResult, NextPage } from 'next'
import React from 'react'
import Cryptos from '../components/feature/Cryptos'
import Stats from '../components/feature/Stats'


const Home: NextPage<CoinsResponse> = (coins: CoinsResponse) => {
  
  return (<> 
    <Stats stats={coins.data?.stats}/>
    <Cryptos cryptos={coins.data.coins}/>
  </>)
}


export async function getServerSideProps(): Promise<GetServerSidePropsResult<CoinsResponse>> {
  const headers = {
    'x-rapidapi-host': process.env.coinRankingHost ?? '',
    'x-rapidapi-key': process.env.rapidApiKey ?? ''
  }

  const resCrypto = await fetch('https://coinranking1.p.rapidapi.com/coins?limit=10', {headers});
  const coins: CoinsResponse = await resCrypto.json();

  return !coins ? {notFound: true} : {props: {status: coins.status, data: coins.data}}
}


export default Home
