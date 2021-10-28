import { GetServerSidePropsResult, NextPage } from "next";
import ExchangesCrypto from "../../components/feature/Exchanges";
import { ExchangesResponse } from "../../types/exchanges";

const Exchanges: NextPage<ExchangesResponse> = (exchanges: ExchangesResponse) => {
    return (<>
        <ExchangesCrypto exchanges={exchanges.data?.exchanges}/>
    </>)
}


export async function getServerSideProps(): Promise<GetServerSidePropsResult<ExchangesResponse>> {
    const headers = {
      'x-rapidapi-host': process.env.coinRankingHost ?? '',
      'x-rapidapi-key': process.env.rapidApiKey ?? ''
    }
  
    const resExchanges = await fetch('https://coinranking1.p.rapidapi.com//exchanges', {headers});
    const exchanges: ExchangesResponse = await resExchanges.json();
  
    return !exchanges ? {notFound: true} : {props: {status: exchanges.status, data: exchanges.data}}
  }


export default Exchanges;