'use client'

import React, {FC} from "react";
import { Card, Badge } from "react-bootstrap";
import Image from 'next/image'


interface NewsCardProps {
    news: News;
}


const NewsCard: FC<NewsCardProps> = ({news}: NewsCardProps) => {

    return (<>
        <Card id="card" className="w-100 border-0 rounded mb-4 cursor-pointer d-flex flex-column">
            <a href={news.url} target="_blank" rel="noreferrer" className="text-black">
            {news.img && <Image src={news.img} width={100} height={200} className="w-100 rounded-top object-fit-cover" alt={news.title}/>}
            <Card.Body className="py-3 px-3 d-flex flex-column">
                <Card.Title className="d-flex align-items-center mb-3 fw-bold">
                    {news.title}
                </Card.Title>
                <Card.Text className="mb-1 text-grey">
                    {news.text.length > 100 ? `${news.text.substring(0, 100)}...` : news.text}
                </Card.Text>
                <Card.Text className="mt-3 text-grey d-flex justify-content-end">
                    {new Date(news.time).toLocaleDateString('en-US')}
                </Card.Text>
            </Card.Body>
            </a>
        </Card>
    </>)
}

export default NewsCard;