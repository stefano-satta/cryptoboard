import { GetServerSidePropsResult, NextPage } from "next";
import NewsCryptos from '../../components/feature/News';


const News: NextPage<NewsResponse> = (news: NewsResponse) => {
    return (<> 
        <NewsCryptos news={news.data?.body}/>
    </>)
}

export async function getServerSideProps(): Promise<GetServerSidePropsResult<NewsResponse>> {
    const headers = {
        'x-rapidapi-host': process.env.NEXT_PUBLIC_YAHOO_NEWS_HOST || '',
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY || ''
    }
  
    const resCryptoNews = await fetch('https://yahoo-finance15.p.rapidapi.com/api/v2/markets/news?type=ALL', {headers});
    const news: NewsData = await resCryptoNews.json();
  
    return !news ? {notFound: true} : {props: {status: news.meta.status === 200 ? 'success':'fail', data: news}}
  }

export default News;