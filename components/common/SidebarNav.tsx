import React, {useState} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Nav, Offcanvas, Button } from "react-bootstrap";
library.add(fas, fab);


const SidebarNav = () => {
    const router = useRouter();
    const [isShowOffCanvas, setShowOffCanvas] = useState<boolean>(false);
    const handleShowOffCanvas = () => setShowOffCanvas(!isShowOffCanvas);

    return (
        <>
            <div id="float-menu" 
                className="d-flex justify-content-center position-fixed rounded-circle bg-white me-0">
                <Button variant="transparent" 
                    onClick={handleShowOffCanvas} 
                    className="">
                    <FontAwesomeIcon icon={['fas', 'bars']}/>
                </Button>
            </div>

            <Offcanvas show={isShowOffCanvas} onHide={handleShowOffCanvas}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>
                        <Link href={'/'}>
                            <h1 className="ps-2 fs-2 fw-bold cursor-pointer" onClick={handleShowOffCanvas}>
                                <FontAwesomeIcon icon={['fab', 'bitcoin']} className="me-2"/>
                                Cryptoboard
                            </h1>
                        </Link>
                    </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="d-flex flex-column">
                        <Nav.Item className={`mx-4 rounded py-3 ps-4 ${router.pathname === '/' ? 'active': ''}`} onClick={handleShowOffCanvas}>
                            <FontAwesomeIcon icon={'table'} className="me-3" size="lg"/>
                            <Link href="/">Dashboard</Link>
                        </Nav.Item>
                        <Nav.Item className={`mx-4 rounded py-3 ps-4 ${router.pathname === '/cryptocurrencies' ? 'active': ''}`} onClick={handleShowOffCanvas}>
                            <FontAwesomeIcon icon={'chart-line'} className="me-3" size="lg"/>
                            <Link href="/cryptocurrencies">Cryptos</Link>
                        </Nav.Item>
                        <Nav.Item className={`mx-4 rounded py-3 ps-4 ${router.pathname === '/exchanges' ? 'active': ''}`} onClick={handleShowOffCanvas}>
                            <FontAwesomeIcon icon={'handshake'} className="me-3" size="lg"/>
                            <Link href="/exchanges">Exchanges</Link>
                        </Nav.Item>
                        <Nav.Item className={`mx-4 rounded py-3 ps-4 ${router.pathname === '/news' ? 'active': ''}`} onClick={handleShowOffCanvas}>
                            <FontAwesomeIcon icon={'newspaper'} className="me-3" size="lg"/>
                            <Link href="/news">News</Link>
                        </Nav.Item>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}

export default SidebarNav;