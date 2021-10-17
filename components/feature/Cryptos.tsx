import { FC } from "react";
import CryptoCard from "../common/CryptoCard";

interface CryptosProps {
    cryptos: Coin[];
}

const Cryptos: FC<CryptosProps> = ({cryptos}: CryptosProps) => {
    return (<>
        <div className="w-100 my-5">
            <h2 className="mb-3 fw-bold">Global Top 10 Cryptos</h2>
            <div className="d-flex flex-wrap justify-content-between">
                { cryptos.map( crypto => ( <CryptoCard crypto={crypto}/>) )}
            </div>
        </div>
    </>)
}

export default Cryptos;