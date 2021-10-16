import type { GetStaticPropsResult, NextPage } from 'next'


const Home: NextPage<CoinsResponse> = (coins: CoinsResponse) => {
  
  console.log(coins)
  return (<> 
    home
  </>)
}


export async function getStaticProps(): Promise<GetStaticPropsResult<any>> {
  const headers = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '72e7b75a29msh165146488a8416bp12c17ejsn9473867a644b'
  }

  const resCrypto = await fetch('https://coinranking1.p.rapidapi.com/coins?limit=10', {headers});
  const coins: CoinsResponse = await resCrypto.json();

  return !coins ? {notFound: true} : {props: {status: coins.status, data: coins.data}}
}


export default Home
