type Status = {
    status: 'success' | 'fail';
    type?: string;
    message?: string;
}

interface CoinsResponse extends Status {
    data: CoinsData;
}

interface CoinsData {
    stats: Stats;
    base: Base;
    coins: Coin[];
}

interface Stats {
    total: number;
    offset: number;
    limit: number
    order: string;
    base: string;
    totalMarkets: number;
    totalExchanges: number;
    totalMarketCap: number;
    total24hVolume: number;
}

interface Base {
    symbol: string;
    sign: string;
}

interface Coin {
    uuid: string;
    symbol: string;
    name: string;
    description: string;
    color?: string;
    iconUrl: string;
    websiteUrl?: string;
    socials: Social[];
    links: Link[];
    numberOfMarkets: number;
    numberOfExchanges: number;
    type: string;
    "24hVolume": string;
    marketCap: string;
    price: string;
    supply: Supply;
    firstSeen: number;
    listedAt: number;
    change: number;
    rank: number;
    history: string[];
    allTimeHigh: AllTimeHigh;
    penalty: boolean;
}

interface Supply {
    total: number;
    confirmed: boolean;
    circulating: number;
}

interface Social {
    name: string;
    url: string;
    type: string;
}
  
interface Link {
    name: string;
    type: string;
    url: string;
}
  
interface AllTimeHigh {
    price: string;
    timestamp: number;
}


interface CoinResponse extends Status {
    data: CoinData;
}

interface CoinData {
    base: Base;
    coin: Coin;
}

interface HistoryResponse extends Status {
    data: HistoryData;
}

interface HistoryData {
    change: number;
    history: History[];
}

interface History {
    price: string;
    timestamp: number;
}

interface CoinHistoryResponse extends Status {
    data: {coin: CoinData, history: HistoryData}
}

interface CoinsStatsNewsResponse extends Status {
    data: {coins: Coins[], stats: Stats, news: NewsData}
}