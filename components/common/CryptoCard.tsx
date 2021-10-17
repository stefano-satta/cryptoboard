import React, { FC } from "react";
import { Card, Badge } from "react-bootstrap";
import Image from 'next/image'

interface CyptoCardProps {
    crypto: Coin;
}


const CryptoCard: FC<CyptoCardProps> = ({crypto}: CyptoCardProps) => {

    return (<>
        <Card style={{ width: '32%' }} className="border-0 rounded p-2 mb-4">
            <Card.Body>
                <Card.Title className="d-flex align-items-center justify-content-between mb-5">
                    <div className="d-flex align-items-center">
                        <Image src={crypto.iconUrl} width={30} height={30}/>
                        <span className="ms-2 fw-semi-bold">{crypto.name}</span>
                    </div>
                    <div>
                        <Badge bg={crypto.change > 0 ? 'success': 'danger'}>{crypto.change}</Badge>
                    </div>
                </Card.Title>
            
                <Card.Text>
                    <p className="mb-1"><span className="text-muted">Price:</span> <span className="">{crypto.price}</span></p>
                    <p className="mb-1"><span className="text-muted">Rank:</span> <span className="">{crypto.rank}</span></p>
                    <p className="mb-1"><span className="text-muted">Market Cap:</span> <span className="">{crypto.marketCap}</span></p>
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    </>)
}

export default CryptoCard;