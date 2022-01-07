import { Container, Nav, Navbar } from "react-bootstrap";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from "next/dist/client/router";
import React, {createRef, useEffect} from "react";
import useScrolledNavbar from "../../hooks/useScrolledNavbar";
library.add(fas, fab);


const NavBar = () => {
    const router = useRouter();
    const refNav = createRef<HTMLDivElement>();
    useScrolledNavbar(refNav)

    return (<>
        <Navbar bg="white" expand="lg" fixed="top" collapseOnSelect ref={refNav}>
            <Container fluid className="px-lg-5">
                <Navbar.Brand className="cursor-pointer">
                    <Link href="/" passHref>
                        <Nav.Link className="text-black fw-bold fs-4">
                            <FontAwesomeIcon icon={['fab', 'bitcoin']} className="me-2"/>
                            Cryptoboard
                        </Nav.Link>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="pt-4 pt-lg-0">
                    <Nav className="ms-auto">
                        <Nav.Item>
                            <Link href="/" passHref>
                                <Nav.Link eventKey="1" className={`mx-2 rounded py-3 px-4 ${router.pathname === '/' ? 'active': ''}`}>
                                <FontAwesomeIcon icon={'table'} className="me-2" size="lg"/>
                                        Dashboard
                                </Nav.Link>
                            </Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link href="/cryptocurrencies" passHref>
                                <Nav.Link eventKey="2" className={`mx-2 rounded py-3 px-4 ${router.pathname === '/cryptocurrencies' ? 'active': ''}`}>
                                    <FontAwesomeIcon icon={'chart-line'} className="me-2" size="lg"/>
                                    Cryptos
                                </Nav.Link>
                            </Link>
                        </Nav.Item>
                        {/* <Nav.Item>
                            <Nav.Link eventKey="3" className={`mx-2 rounded py-3 px-4 ${router.pathname === '/exchanges' ? 'active': ''}`}>
                                <FontAwesomeIcon icon={'handshake'} className="me-2" size="lg"/>
                                <Link href="/exchanges">Exchanges</Link>
                            </Nav.Link>
                        </Nav.Item> */}
                        <Nav.Item>
                                <Link href="/news" passHref>
                                    <Nav.Link eventKey="4" className={`mx-2 rounded py-3 px-4 ${router.pathname === '/news' ? 'active': ''}`}>
                                        <FontAwesomeIcon icon={'newspaper'} className="me-2" size="lg"/>
                                        News
                                    </Nav.Link>
                                </Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}

export default NavBar;