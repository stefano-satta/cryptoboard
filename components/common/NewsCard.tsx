import React, {FC} from "react";
import { Card, Badge } from "react-bootstrap";
import Image from 'next/image'
import Link from 'next/link'


interface NewsCardProps {
    news: News;
}


const NewsCard: FC<NewsCardProps> = ({news}: NewsCardProps) => {

    return (<>
    {/* <Link href={news.url} target="_blank"> */}
        <Card style={{ width: '32%' }} className="border-0 rounded mb-4 cursor-pointer">
            {news.image?.thumbnail.contentUrl && <Image src={news.image?.thumbnail.contentUrl} width={100} height={200} className="rounded-top"/>}
            <Card.Body className="py-3 px-3 d-flex flex-column justify-content-between">
                <Card.Title className="d-flex align-items-center justify-content-between mb-3">
                    <div className="d-flex align-items-center">
                    <a href={news.url} target="_blank" rel="noreferrer" className="text-black">
                        <span className="fw-semi-bold">{news.name}</span>
                    </a>
                    </div>
                </Card.Title>

                <Card.Text className="mb-1 text-grey">
                    {news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}
                </Card.Text>
                <Card.Text className="mb-1 text-grey d-flex justify-content-end">
                    {new Date(news.datePublished).toLocaleDateString('en-US')}
                </Card.Text>

            </Card.Body>
        </Card>
    {/* </Link> */}
    </>)
}

export default NewsCard;