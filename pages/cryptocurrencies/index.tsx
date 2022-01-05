import { GetServerSidePropsResult, NextPage } from "next";
import Cryptos from '../../components/feature/Cryptos';


const Cryptocurrencies: NextPage<CoinsResponse> = (coins: CoinsResponse) => {

    return (<>
        <Cryptos cryptos={coins.data.coins}/>
    </>)
}


export async function getServerSideProps(): Promise<GetServerSidePropsResult<CoinsResponse>> {
  const headers = {
    'x-rapidapi-host': process.env.coinRankingHost ?? '',
    'x-rapidapi-key': process.env.rapidApiKey ?? ''
  }

  const resCrypto = await fetch('https://coinranking1.p.rapidapi.com/coins?limit=100', {headers});
  const coins: CoinsResponse = await resCrypto.json();

  return !coins ? {notFound: true} : {props: {status: coins.status, data: coins.data}}
}
  

export default Cryptocurrencies;