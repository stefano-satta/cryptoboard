import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { Nav } from 'react-bootstrap';
library.add(fas, fab);
// React.useLayoutEffect = React.useEffect 

const SidebarNav = () => {
    const router = useRouter();

    return (
        <Nav className="d-none d-md-block bg-light sidebar position-fixed bg-white" style={{width: '15rem'}}>
            <Link href="/">
                <h1 className="ps-2 mb-5 fs-2 fw-bold cursor-pointer">
                    <FontAwesomeIcon icon={['fab', 'bitcoin']} className="me-2"/>
                    Cryptoboard
                </h1>
            </Link>            
            <Nav.Item className={`mx-4 rounded py-3 ps-4 ${router.pathname === '/' ? 'active': ''}`}>
                <FontAwesomeIcon icon={'table'} className="me-3" size="lg"/>
                <Link href="/">Dashboard</Link>
            </Nav.Item>
            <Nav.Item className={`mx-4 rounded py-3 ps-4 ${router.pathname === '/cryptocurrencies' ? 'active': ''}`}>
                <FontAwesomeIcon icon={'chart-line'} className="me-3" size="lg"/>
                <Link href="/cryptocurrencies">Cryptos</Link>
            </Nav.Item>
            <Nav.Item className={`mx-4 rounded py-3 ps-4 ${router.pathname === '/exchanges' ? 'active': ''}`}>
                <FontAwesomeIcon icon={'handshake'} className="me-3" size="lg"/>
                <Link href="/exchanges">Exchanges</Link>
            </Nav.Item>
            <Nav.Item className={`mx-4 rounded py-3 ps-4 ${router.pathname === '/news' ? 'active': ''}`}>
                <FontAwesomeIcon icon={'newspaper'} className="me-3" size="lg"/>
                <Link href="/news">News</Link>
            </Nav.Item>
        </Nav>
    )
}

export default SidebarNav;