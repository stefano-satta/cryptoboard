import type { GetServerSidePropsResult, NextPage } from 'next'
import React from 'react'
import Cryptos from '../components/feature/Cryptos'
import NewsCryptos from '../components/feature/News'
import QuoteBox from '../components/feature/QuoteBox'
import Stats from '../components/feature/Stats'


const Home: NextPage<CoinsStatsNewsResponse> = (props: CoinsStatsNewsResponse) => {
  const {data: {coins, stats, news}} = props;
  
  return (<> 
    <QuoteBox/>
    <Stats stats={stats}/>
    <Cryptos cryptos={coins}/>
    <NewsCryptos news={news.body.slice(0, 10)}/>
  </>)
}


export async function getServerSideProps(): Promise<GetServerSidePropsResult<CoinsStatsNewsResponse>> {
  const headersCoin = {
    'x-rapidapi-host': process.env.coinRankingHost ?? '',
    'x-rapidapi-key': process.env.rapidApiKey ?? ''
  }

  const headersNews = {
    'x-rapidapi-host': process.env.NEXT_PUBLIC_YAHOO_NEWS_HOST || '',
    'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY || ''
  }

  const resCrypto = await fetch('https://coinranking1.p.rapidapi.com/coins?limit=10', {headers: headersCoin});
  const coins: CoinsResponse = await resCrypto.json();

  const resCryptoNews = await fetch('https://yahoo-finance15.p.rapidapi.com/api/v2/markets/news?type=ALL', {headers: headersNews});
  const news: NewsData = await resCryptoNews.json();

  return !coins && !news ? {notFound: true} : {props: 
    { status: coins.status, data: { 
      coins: coins.data.coins, 
      stats: coins.data.stats, 
      news: news
    }}}
}


export default Home;
