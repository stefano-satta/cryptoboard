interface NewsResponse extends Status {
    data: NewsData;
}

interface NewsData {
    _type: string;
    readLink: string;
    queryContext: QueryContext;
    totalEstimatedMatches: number;
    sort: Sort[];
    value: News[];
}

interface QueryContext {
    _type: string;
    originalQuery: string;
    adultIntent: boolean;
}

interface Sort {
    _type: string;
    name: string;
    id: string;
    isSelected: boolean;
    url: string;
}

interface News {
    _type: NewsResponseType;
    name: string;
    url: string;
    description: string;
    provider: Provider[];
    datePublished: Date;
    category?: string;
    image?: Image;
}

interface Image {
    _type: string;
    isLicensed: boolean;
    thumbnail: {_type: string; contentUrl: string; height: number; width: number;}
}

type NewsResponseType = 'NewsArticle' | 'ErrorResponse';


interface Provider {
    image: Image;
    name: string;
    _type: string;
}