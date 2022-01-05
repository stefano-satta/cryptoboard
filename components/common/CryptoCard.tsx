import React, { FC } from "react";
import { Card, Badge } from "react-bootstrap";
import Image from 'next/image'
import Link from 'next/link'


interface CyptoCardProps {
    crypto: Coin;
}


const CryptoCard: FC<CyptoCardProps> = ({crypto}: CyptoCardProps) => {

    return (<>
        <Link href={`/cryptocurrencies/${crypto.uuid}`}>
            <Card id="card" className="border-0 rounded p-2 mb-4 cursor-pointer">
                <Card.Body>
                    <Card.Title className="d-flex align-items-center justify-content-between mb-5">
                        <div className="d-flex align-items-center">
                            <Image src={crypto.iconUrl} width={30} height={30}/>
                            <span className="ms-2 fw-semi-bold">{crypto.name}</span>
                        </div>
                        <div>
                            <Badge bg={crypto.change > 0 ? 'success': 'danger'}>{crypto.change > 0 ? '+':''}{crypto.change}</Badge>
                        </div>
                    </Card.Title>
                
                    <Card.Text className="mb-1">
                        <span className="text-muted">Price:</span> <span className="fs-5 fw-bold">
                            {new Intl.NumberFormat('en-US', 
                                { style: 'currency', currency: 'USD'})
                                .format(Number(crypto.price))
                            }
                        </span>
                    </Card.Text>
                    <Card.Text className="mb-1">
                    <span className="text-muted">Rank #:</span> <span className="">{crypto.rank}</span>
                    </Card.Text>
                    <Card.Text className="mb-1">
                        <span className="text-muted">Market Cap:</span> <span className="">
                            {new Intl.NumberFormat('en-US', 
                                { style: 'currency', currency: 'USD'})
                                .format(crypto.marketCap)
                            }
                        </span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    </>)
}

export default CryptoCard;