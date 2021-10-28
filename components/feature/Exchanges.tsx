import React, { FC } from "react";
import { Button, OverlayTrigger, Popover, Table } from "react-bootstrap";
import { Exchange } from "../../types/exchanges";
import Image from 'next/image'
import HTMLReactParser from "html-react-parser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface ExchangesProps {
    exchanges: Exchange[];
}

const ExchangesCrypto: FC<ExchangesProps> = ({exchanges}: ExchangesProps) => {
    
    return (<>
        <div className="w-100 pb-5">
            <h2 className="mb-3 fw-bold">{`Global Cryptos Exchanges`}</h2>
            <div className="bg-white rounded p-4 mb-5">
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Volume (24h)</th>
                            <th>Markets</th>
                            <th>Changes</th>
                            <th/>
                        </tr>
                    </thead>
                    <tbody>
                        { exchanges.map( (exchange: Exchange) => (<>
                            <tr key={`${exchange.volume}-${exchange.uuid}`} className="">
                                <td>{exchange.rank}</td>
                                <td className="">
                                    <div className="d-flex align-items-center">
                                        <Image src={exchange.iconUrl} width={30} height={30}/>
                                        <span className="ms-3">{exchange.name}</span>
                                    </div>
                                    
                                </td>
                                <td>{new Intl.NumberFormat('en-US', 
                                        { style: 'currency', currency: 'USD'})
                                        .format(exchange.volume)}
                                </td>
                                <td>{exchange.numberOfMarkets}</td>
                                <td>{exchange.marketShare.toFixed(2)}</td>
                                <td>
                                <OverlayTrigger
                                    key={`overlay-${exchange.volume}-${exchange.uuid}`}
                                    rootClose
                                    trigger="click"
                                    placement={'left'}
                                    overlay={
                                        <Popover id={`popover-positioned-left`}>
                                        <Popover.Body>
                                            {HTMLReactParser(exchange.description || 'Sorry! no description :(')}
                                        </Popover.Body>
                                        </Popover>
                                    }
                                    >
                                    <Button variant="link" className="text-grey mx-auto">
                                        <FontAwesomeIcon icon={'clipboard'} className="me-3" size={'sm'}/>
                                    </Button>
                                    </OverlayTrigger>

                                    <a href={exchange.websiteUrl} target="_blank" className="text-grey">
                                        <FontAwesomeIcon icon={'link'} className="me-3" size={'sm'}/>
                                    </a>
                                </td>
                            </tr>
                        </>))}
                    </tbody>
                </Table>
            </div>
        </div>
    </>)
}

export default ExchangesCrypto;


