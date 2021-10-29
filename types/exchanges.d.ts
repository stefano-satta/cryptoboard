interface ExchangesResponse extends Status {
    data: ExchangesData;
}

interface ExchangesData {
    stats: Stats;
    currencies: Currency[];
    exchanges: Exchange[];
}

interface Currency {
    id: number;
    uuid: string;
    type: string;
    iconUrl: string;
    name: string;
    symbol: string;
    sign: string;
}

interface Exchange {
    id: number;
    uuid: string;
    name: string;
    description: null | string;
    iconUrl: string;
    verified: boolean;
    lastTickerCreatedAt: number;
    numberOfMarkets: number;
    volume: number;
    websiteUrl: string;
    rank: number;
    marketShare: number;
}

interface Stats {
    volume: number;
    total: number;
    limit: number;
    offset: number;
}
