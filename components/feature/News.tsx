import React, { FC } from "react";
import NewsCard from "../common/NewsCard";
import {Col, Container, Row} from "react-bootstrap";


interface NewsCryptosProps {
    news: News[];
}


const NewsCryptos: FC<NewsCryptosProps> = ({news}: NewsCryptosProps) => {
    return (<>
        {

            news?.length > 0 ?
                (
                    <Container fluid className="p-0">
                        <h2 className="mb-3 fw-bold">{`Global Top ${news?.length} Finance News`}</h2>
                        <Row>
                            { news?.map( (news, index) => {
                                return (
                                    <Col sm={12} md={4} lg={3} className="d-flex gap-2" key={index}>
                                        <NewsCard news={news} key={index}/>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Container>
                ) : (
                    <div className="border-0 rounded mb-4 bg-white p-5 text-center">
                        Sorry! <br />
                        Servizio Yahoo Finance News al momento non disponibile.
                    </div>
                )
        }
    </>)
}

export default NewsCryptos;