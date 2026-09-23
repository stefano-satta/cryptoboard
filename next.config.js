/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    rapidApiKey: '72e7b75a29msh165146488a8416bp12c17ejsn9473867a644b',
    coinRankingHost: 'coinranking1.p.rapidapi.com',
    bingNewsHost: 'bing-news-search1.p.rapidapi.com'
  },
  images: {
    remotePatterns:[
        { protocol: 'https', hostname: 'cdn.coinranking.com' },
        { protocol: 'https', hostname: '**' },
    ]
  }
}