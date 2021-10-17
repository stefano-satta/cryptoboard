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
    id: number;
    uuid: string;
    slug: string;
    symbol: string;
    name: string;
    description: string;
    color?: string;
    iconType: string;
    iconUrl: string;
    websiteUrl?: string;
    socials: Social[];
    links: Link[];
    confirmedSupply: boolean;
    numberOfMarkets: number;
    numberOfExchanges: number;
    type: string;
    volume: number;
    marketCap: number;
    price: string;
    circulatingSupply: number;
    totalSupply: number;
    approvedSupply: boolean;
    firstSeen: number;
    listedAt: number;
    change: number;
    rank: number;
    history: string[];
    allTimeHigh: AllTimeHigh;
    penalty: boolean;
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