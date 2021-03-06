import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HTMLReactParser from "html-react-parser";
import { GetServerSidePropsResult, NextPage } from "next";
import React from "react";
import { ListGroup } from "react-bootstrap";
import LineChart from "../../components/common/LineChat";

const CryptoDetail: NextPage<CoinHistoryResponse> = (props: CoinHistoryResponse) => {
    const {data: {coin, history}} = props;

    const getLabelChart = () => {
        return history.history.map( date => new Date(date.timestamp).toLocaleDateString('en-US'));
    }

    const getDataChart = () => {
        return history.history.map( item => item.price);
    }



    return (<>
        <div className="w-100">
            <h2 className="mb-4 fw-bold">{`${coin.coin?.name} (${coin.coin?.symbol}) details`}</h2>
            
            <div className="w-100">
                <div className="bg-white rounded p-4 mb-5">
                    <div className="d-flex justify-content-center mb-5">
                        <span className="me-5">Change: <span className="fw-bold">{history.change}%</span></span>
                        <span>Current price: 
                            <span className="fw-bold">
                                { new Intl.NumberFormat('en-US', 
                                            { style: 'currency', currency: 'USD'})
                                                .format(Number(coin.coin?.price))}
                            </span>
                        </span>
                    </div>
                    <LineChart labels={getLabelChart()} dataChart={getDataChart()}/>
                </div>
            </div>

            <div className="d-flex flex-wrap">

                <div className="box bg-white rounded p-4 mb-5">
                    <h2 className="fw-bold mb-3">Stats</h2>
                    <ListGroup>
                        <ListGroup.Item className="d-flex justify-content-between py-3 border-0 border-bottom">
                            <span className="text-grey">Price</span>
                            <span className="fw-bold">
                                { new Intl.NumberFormat('en-US', 
                                    { style: 'currency', currency: 'USD'})
                                        .format(Number(coin.coin?.price))}
                            </span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between py-3 border-0 border-bottom">
                            <span className="text-grey">Rank</span>
                            <span className="fw-bold">{coin.coin?.rank}</span>
                        </ListGroup.Item> 
                        <ListGroup.Item className="d-flex justify-content-between py-3 border-0 border-bottom">
                            <span className="text-grey">Volume (24H)</span>
                            <span className="fw-bold">
                                { new Intl.NumberFormat('en-US', 
                                    { style: 'currency', currency: 'USD'})
                                        .format(Number(coin.coin["24hVolume"]))}
                            </span>
                        </ListGroup.Item> 
                        <ListGroup.Item className="d-flex justify-content-between py-3 border-0 border-bottom">
                            <span className="text-grey">Market Cap</span>
                            <span className="fw-bold">
                                { new Intl.NumberFormat('en-US', 
                                { style: 'currency', currency: 'USD'})
                                    .format(Number(coin.coin?.marketCap))}
                            </span>
                        </ListGroup.Item> 
                        <ListGroup.Item className="d-flex justify-content-between py-3 border-0 border-bottom">
                            <span className="text-grey">All Time High</span>
                            <span className="fw-bold">
                                { new Intl.NumberFormat('en-US', 
                                    { style: 'currency', currency: 'USD'}).format(Number(coin.coin?.allTimeHigh?.price))
                                }
                            </span>
                        </ListGroup.Item>
                    </ListGroup>
                </div>

                <div className="box bg-white rounded p-4 mb-5">
                    <h2 className="fw-bold mb-3">Others Info</h2>
                    <ListGroup>
                        <ListGroup.Item className="d-flex justify-content-between py-3 border-0 border-bottom">
                            <span className="text-grey">Number of Markets</span>
                            <span className="fw-bold">{coin.coin?.numberOfMarkets}</span>
                        </ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between py-3 border-0 border-bottom">
                            <span className="text-grey">Number of Exchanges</span>
                            <span className="fw-bold">{coin.coin?.numberOfExchanges}</span>
                        </ListGroup.Item> 
                        <ListGroup.Item className="d-flex justify-content-between py-3 border-0 border-bottom">
                            <span className="text-grey">Approved Supply</span>
                            <span className="fw-bold">
                                {   coin.coin?.supply?.confirmed ? <FontAwesomeIcon icon={'check'} className="text-success" size="lg"/> : <FontAwesomeIcon icon={'times'} size="lg" className="text-danger"/>  }
                            </span>
                        </ListGroup.Item> 
                        <ListGroup.Item className="d-flex justify-content-between py-3 border-0 border-bottom">
                            <span className="text-grey">Total Supply</span>
                            <span className="fw-bold">
                                { new Intl.NumberFormat('en-US', 
                                    { style: 'currency', currency: 'USD'}).format(Number(coin.coin?.supply?.total))
                                }
                            </span>
                        </ListGroup.Item> 
                        <ListGroup.Item className="d-flex justify-content-between py-3 border-0 border-bottom">
                            <span className="text-grey">Circulating Supply</span>
                            <span className="fw-bold">
                                { new Intl.NumberFormat('en-US', 
                                    { style: 'currency', currency: 'USD'}).format(Number(coin.coin?.supply?.circulating))
                                }
                            </span>
                        </ListGroup.Item>
                    </ListGroup>
                </div>
            </div>

            
            <div className="d-flex flex-wrap" >
                <div className="box bg-white rounded p-4 mb-5" id="crypto-description">
                    <h2 className="fw-bold mb-3">What is {coin.coin.name}</h2>
                    {HTMLReactParser(coin.coin.description)}
                </div>

                <div className=" box bg-white rounded p-4 mb-5">
                    <h2 className="fw-bold mb-3">Useful links</h2>
                    <ListGroup>
                    {
                        coin.coin?.links.map( (link, index) => (
                            <ListGroup.Item className="d-flex justify-content-between border-0 border-bottom py-4" key={`${link.name}-${index}`}>
                                <span className="text-grey">{link.type}</span>
                                <span>
                                    <a href={link.url} target="_blank" rel="noreferrer" className="text-black fw-bold">
                                        {link.name}
                                    </a>
                                </span>
                            </ListGroup.Item>
                        ))
                    }
                    </ListGroup>
                </div>
            </div>
        </div>
    </>)
}

export async function getServerSideProps({params}: any): Promise<GetServerSidePropsResult<CoinHistoryResponse>> {
    const {uuid} = params;

    const headers = {
      'x-rapidapi-host': process.env.coinRankingHost ?? '',
      'x-rapidapi-key': process.env.rapidApiKey ?? ''
    }
  
    // https://coinranking1.p.rapidapi.com/coin/${id}
    // https://coinranking1.p.rapidapi.com/coin/1/history/7d
    const resCoin = await fetch(`https://coinranking1.p.rapidapi.com/coin/${uuid}`, {headers});
    const resHistoryCoin = await fetch(`https://coinranking1.p.rapidapi.com/coin/${uuid}/history?7d`, {headers});

    const coin: CoinResponse = await resCoin.json();
    const historyCoin: HistoryResponse = await resHistoryCoin.json();
  
    return !coin ? {notFound: true} : {props: {status: coin.status, data: {coin: coin.data, history: historyCoin.data}}}
  }


  //?x-access-token=i-have-to-migrate-to-v2






export default CryptoDetail;