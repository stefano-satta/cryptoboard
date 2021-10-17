import React, { useState } from 'react';
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
        <Nav className="d-none d-md-block bg-light sidebar position-fixed bg-white text-center" style={{width: '15rem'}}>
            <Nav.Item className={`mx-4 rounded py-3 align-middle ${router.pathname === '/' ? 'active': ''}`}>
                <Link href="/">Dashboard</Link>
            </Nav.Item>
            <Nav.Item className={`mx-4 rounded py-3 ${router.pathname === '/cryptos' ? 'active': ''}`}>
                <Link href="/cryptos">Cryptos</Link>
            </Nav.Item>
            <Nav.Item className={`mx-4 rounded py-3 ${router.pathname === '/exhanges' ? 'active': ''}`}>
                <Link href="/exhanges">Exchanges</Link>
            </Nav.Item>
            <Nav.Item className={`mx-4 rounded py-3 ${router.pathname === '/news' ? 'active': ''}`}>
                <Link href="/news">News</Link>
            </Nav.Item>
        </Nav>
    )
}

export default SidebarNav;