import React, { FC } from "react";
import { Col, Row } from "react-bootstrap";

interface StatsProps {
    stats: Stats;
}

const Stats: FC<StatsProps> = ({stats}: StatsProps) => {
    return (<>
    <div className="w-100 mb-5">
        <h2 className="mb-3 fw-bold">Global Crypto Stats</h2>
        <div className="bg-white rounded p-4 mb-5">
            
            <Row className="mb-3">
                <Col>
                    <div>
                        <span className="fs-6 text-muted">Total Cryptocurrencies</span><br/>
                        <span className="fs-4">{stats.total}</span>
                    </div>
                </Col>
                <Col>
                    <div>
                        <span className="fs-6 text-muted">Total Exchanges</span><br/>
                        <span className="fs-4">{stats.totalExchanges}</span>
                    </div>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <div>
                        <span className="fs-6 text-muted">Total Market Cap</span><br/>
                        <span className="fs-4">
                            { new Intl.NumberFormat('en-US', 
                                { style: 'currency', currency: 'USD'})
                                    .format(stats.totalMarketCap)}</span>
                    </div>
                </Col>
                <Col>
                    <div>
                        <span className="fs-6 text-muted">Total Volume (24h)</span><br/>
                        <span className="fs-4">
                            {   new Intl.NumberFormat('en-US', 
                                { style: 'currency', currency: 'USD'})
                                    .format(stats.total24hVolume)}
                        </span>
                    </div>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <div>
                        <span className="fs-6 text-muted">Total Market</span><br/>
                        <span className="fs-4">{stats.totalMarkets}</span>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
    </>)
}

export default Stats;