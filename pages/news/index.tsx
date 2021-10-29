import { GetServerSidePropsResult, NextPage } from "next";
import NewsCryptos from '../../components/feature/News';
import { NewsResponseType } from "../../utility/enum";



const News: NextPage<NewsResponse> = (news: NewsResponse) => {
    return (<> 
        <NewsCryptos news={news.data?.value}/>
    </>)
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<NewsResponse>> {
    const headers = {
        'x-bingapis-sdk': 'true',
        'x-rapidapi-host': process.env.bingNewsHost ?? '',
        'x-rapidapi-key': process.env.rapidApiKey ?? ''
    }
  
    const resCryptoNews = await fetch('https://bing-news-search1.p.rapidapi.com/news/search?q=Cryptocurrency&safeSearch=Off&count=15&setLang=en-US', {headers});
    const news: NewsData = await resCryptoNews.json();
  
    return !news ? {notFound: true} : {props: {status: news._type !== NewsResponseType.ErrorResponse ? 'success':'fail', data: news}}
  }

export default News;