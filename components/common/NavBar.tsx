import { Container, Nav, Navbar } from "react-bootstrap";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from "next/dist/client/router";
import React, {createRef, FC, useEffect, useState} from "react";
import useScrolledNavbar from "../../hooks/useScrolledNavbar";
import ROUTING from "../../utility/routing-definition/routing";
import Url from "../../utility/routing-definition/url";
library.add(fas, fab);


const NavBar: FC = () => {
    const router = useRouter();
    const refNav = createRef<HTMLDivElement>();
    const [currentPage, setCurrentPage] = useState<string>(router.pathname);

    useEffect(() => {
        handleClickLink(router.pathname)
    }, [router.pathname])
    
    

    useEffect(() => {
        useScrolledNavbar(refNav);
    })

    const handleClickLink = (link: string) => {
        setCurrentPage(link)
    }

    return (<>
        <Navbar bg="white" expand="lg" fixed="top" collapseOnSelect ref={refNav}>
            <Container fluid className="px-lg-5">
                <Navbar.Brand className="cursor-pointer">
                    <Link href="/" passHref>
                        <Nav.Link className="text-black fw-bold fs-4" onClick={() => handleClickLink(router.pathname)}>
                            <FontAwesomeIcon icon={['fab', 'bitcoin']} className="me-2"/>
                            Cryptoboard
                        </Nav.Link>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="pt-4 pt-lg-0">
                    <Nav className="ms-auto">
                        {
                            ROUTING.map( item => (
                                <Nav.Item key={item.name}>
                                    <Link href={item.url} passHref>
                                        <Nav.Link eventKey="1" 
                                                className={`mx-2 rounded py-3 px-4 ${currentPage == item.url ? 'active': ''}`}
                                                onClick={() => handleClickLink(router.pathname)}>
                                            <FontAwesomeIcon icon={'table'} className="me-2" size="lg"/>
                                            {item.name} {`${currentPage == item.url ? 'active': ''}`}
                                        </Nav.Link>
                                    </Link>
                                </Nav.Item>
                            ))
                        }
                        {/* <Nav.Item>
                            <Nav.Link eventKey="3" className={`mx-2 rounded py-3 px-4 ${router.pathname === '/exchanges' ? 'active': ''}`}>
                                <FontAwesomeIcon icon={'handshake'} className="me-2" size="lg"/>
                                <Link href="/exchanges">Exchanges</Link>
                            </Nav.Link>
                        </Nav.Item> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}

export default NavBar;