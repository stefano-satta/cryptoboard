import HTMLReactParser from "html-react-parser";
import { GetServerSidePropsResult, NextPage } from "next";
import LineChart from "../../components/common/LineChat";

const CryptoDetail: NextPage<CoinHistoryResponse> = (props: CoinHistoryResponse) => {
    const {data: {coin, history}} = props;
    console.log(history.change)

    const getLabelChart = () => {
        return history.history.map( date => new Date(date.timestamp).toLocaleDateString('en-US'));
    }

    const getDataChart = () => {
        return history.history.map( item => item.price);
    }



    return (<>
        <div className="w-100">
            <h2 className="mb-3 fw-bold">{`${coin.coin.name} (${coin.coin.slug}) details`}</h2>
            
            <div className="d-flex justify-content-center my-5">
                <span className="me-5">Change: {history.change}%</span>
                <span>Current price: {coin.coin.price}</span>
            </div>

            <div className="w-100">
                <div className="bg-white rounded p-4 mb-5">
                    <LineChart labels={getLabelChart()} dataChart={getDataChart()}/>
                </div>
            </div>

            
            <div className="d-flex flex-wrap justify-content-between">
                
                <div className="w-100">
                    <div className="bg-white rounded p-4 mb-5">
                        <h2 className="fw-bold mb-3">What is {coin.coin.name}</h2>
                        {HTMLReactParser(coin.coin.description)}
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export async function getServerSideProps({params}: any): Promise<GetServerSidePropsResult<CoinHistoryResponse>> {
    const {id} = params;

    const headers = {
      'x-rapidapi-host': process.env.coinRankingHost ?? '',
      'x-rapidapi-key': process.env.rapidApiKey ?? ''
    }
  
    // https://coinranking1.p.rapidapi.com/coin/${id}
    // https://coinranking1.p.rapidapi.com/coin/1/history/7d
    const resCoin = await fetch(`https://coinranking1.p.rapidapi.com/coin/${id}`, {headers});
    const resHistoryCoin = await fetch(`https://coinranking1.p.rapidapi.com/coin/1/history/7d`, {headers});

    const coin: CoinResponse = await resCoin.json();
    const historyCoin: HistoryResponse = await resHistoryCoin.json();
  
    return !coin ? {notFound: true} : {props: {status: coin.status, data: {coin: coin.data, history: historyCoin.data}}}
  }






export default CryptoDetail;