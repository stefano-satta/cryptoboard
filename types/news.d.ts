interface NewsResponse extends Status {
    data: NewsData;
}

interface NewsData {
    meta: Meta;
    body: News[];
}

interface Meta {
    version: string;
    status: number;
    copywrite: string;
    total: number;
}

interface News {
    url: string;
    img: string;
    title: string;
    text: string;
    source: string;
    type: string;
    time: string;
    ago: string;
}