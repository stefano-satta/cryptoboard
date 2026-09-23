import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import useCurrentDate from '../../hooks/useCurrentDate';

const Footer: FC = () => {
    const {getCurrentYear} = useCurrentDate();

    return (<>
        <footer className="footer text-center bg-primary text-white py-4 mt-auto">
            <h3>Cryptoboard</h3>
            <div className="mb-3">
                <a href="mailto:stefanosatta@outlook.com" rel="noreferrer">
                    <FontAwesomeIcon icon={faEnvelope} className="me-3" size="lg"/>
                </a>
                <a href="https://linkedin.com/in/stefano-satta" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="me-3" size="lg"/>
                </a>
            </div>
            <p className="mb-0">&copy; Stefano Satta {getCurrentYear()}</p>
            <p className="mb-0"><small>Made it with NextJS and RapidAPI</small></p>
        </footer>
    </>)
}

export default Footer;