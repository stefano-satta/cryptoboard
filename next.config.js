/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    rapidApiKey: '72e7b75a29msh165146488a8416bp12c17ejsn9473867a644b',
    coinRankingHost: 'coinranking1.p.rapidapi.com',
    bingNewsHost: 'bing-news-search1.p.rapidapi.com'
  },
  images: {
    domains: ['cdn.coinranking.com', 'www.bing.com']
  }
}



// NEXT_PUBLIC_RAPID_API_KEY = 72e7b75a29msh165146488a8416bp12c17ejsn9473867a644b
// NEXT_PUBLIC_COIN_RANKING_HOST = coinranking1.p.rapidapi.com
// NEXT_PUBLIC_COIN_RANKING_BASE_URL = https://coinranking1.p.rapidapi.com

// NEXT_PUBLIC_COIN_RANKING_STATS = /stats
// NEXT_PUBLIC_COIN_RANKING_GLOBAL_STATS = /coin?limit=:nItem
// NEXT_PUBLIC_COIN_RANKING_GET_COIN = /coin/:id
// NEXT_PUBLIC_COIN_RANKING_EXCHANGES = /exchanges
