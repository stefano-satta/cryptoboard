import { Container, Nav, Navbar } from "react-bootstrap";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp, library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from "next/dist/client/router";
import React, {createRef, FC, useEffect, useState} from "react";
import useScrolledNavbar from "../../hooks/useScrolledNavbar";
import Url from "../../utility/routing-definition/url";
import ROUTING from "../../utility/routing-definition/routing";
library.add(fas, fab);


const NavBar: FC = () => {
    const router = useRouter();
    const refNav = createRef<HTMLDivElement>();
    const [currentPage, setCurrentPage] = useState<string>(router.pathname);
    useScrolledNavbar(refNav);

    useEffect(() => {
        handleClickLink(router.pathname)
    }, [router.pathname])


    const handleClickLink = (link: string) => {
        setCurrentPage(link)
    }

    return (<>
        <Navbar bg="white" expand="lg" fixed="top" collapseOnSelect ref={refNav}>
            <Container fluid className="px-lg-5">
                <Navbar.Brand className="">
                    {/* <Link href={Url.Dashboard} passHref>
                        <Nav.Link className="text-black fw-bold fs-4" onClick={() => handleClickLink(router.pathname)}> */}
                            <FontAwesomeIcon icon={['fab', 'bitcoin']} className="me-2"/>
                            Cryptoboard
                        {/* </Nav.Link>
                    </Link> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="pt-4 pt-lg-0">
                    <Nav className="ms-auto">
                        {
                            ROUTING.map( (item, index) => (
                                <Nav.Item key={item.name}>
                                    <Link href={item.url} passHref>
                                        <Nav.Link eventKey={index} 
                                                className={`mx-2 rounded py-3 px-4 ${currentPage == item.url ? 'active': ''}`}
                                                onClick={() => handleClickLink(router.pathname)}>
                                            <FontAwesomeIcon icon={item.icon as IconProp} className="me-2" size="lg"/>
                                            {item.name}
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