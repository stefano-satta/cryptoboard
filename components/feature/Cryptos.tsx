import { FC } from "react";
import CryptoCard from "../common/CryptoCard";
import {Col, Row} from "react-bootstrap";

interface CryptosProps {
    cryptos: Coin[];
}

const Cryptos: FC<CryptosProps> = ({cryptos}: CryptosProps) => {
    return (
        <>
            <div className="w-100 mb-5">
                <h2 className="mb-3 fw-bold">{`Global Top ${cryptos?.length} Cryptos`}</h2>
                <div className="container-fluid p-0">
                    <Row>
                        { cryptos?.map( crypto => {
                            return (
                                <Col sm={12} md={4} lg={3} className="gap-2" key={crypto?.uuid}>
                                    <CryptoCard crypto={crypto} />
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Cryptos;