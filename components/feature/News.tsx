import React, { FC } from "react";
import NewsCard from "../common/NewsCard";


interface NewsCryptosProps {
    news: News[];
}


const NewsCryptos: FC<NewsCryptosProps> = ({news}: NewsCryptosProps) => {
    return (<>
        <div className="w-100">
            { 
                news?.length > 0 ? (<>
                    <h2 className="mb-3 fw-bold">{`Global Top ${news?.length} Cryptos News`}</h2>
                    <div className="d-flex flex-wrap justify-content-between">
                        { news?.map( (news, index) => ( <NewsCard news={news} key={index}/>) )}
                    </div>
            </>) : 
                <div className="border-0 rounded mb-4 bg-white p-5 text-center">
                    Sorry! <br />
                    Servizio Bing News al momento non disponibile.
                </div>
            }
        </div>
    </>)
}

export default NewsCryptos;