import React, { FC } from "react";
import NewsCard from "../common/NewsCard";


interface NewsCryptosProps {
    news: News[];
}


const NewsCryptos: FC<NewsCryptosProps> = ({news}: NewsCryptosProps) => {
    return (<>
        <div className="w-100">
            <h2 className="mb-3 fw-bold">{`Global Top ${news.length} Cryptos News`}</h2>
            <div className="d-flex flex-wrap justify-content-between">
                { news.map( (news, index) => ( <NewsCard news={news} key={index}/>) )}
            </div>
        </div>
    </>)
}

export default NewsCryptos;