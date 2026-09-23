'use client'

import { Container, Nav, Navbar } from "react-bootstrap";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/dist/client/router";
import React, {createRef, FC, useEffect, useState} from "react";
import useScrolledNavbar from "../../hooks/useScrolledNavbar";
import ROUTING from "../../utility/routing-definition/routing";
import Url from './../../utility/routing-definition/url';


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
        <Navbar bg="white" expand="lg" fixed="top" collapseOnSelect ref={refNav} className="py-3">
            <Container fluid className="px-lg-5">
                <Navbar.Brand className="">
                    <Link href={Url.Dashboard} passHref onClick={() => handleClickLink(router.pathname)}>

                            <FontAwesomeIcon icon={faBitcoin} className="me-2"/>
                            Cryptoboard
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="pt-4 pt-lg-0">
                    <Nav className="ms-auto d-flex align-items-center justify-content-center">
                        {
                            ROUTING.map( (item, index) => (
                                <Nav.Item key={item.name}>
                                    <Link href={item.url} passHref className={`mx-2 rounded py-3 px-4 ${currentPage == item.url ? 'active': ''}`} key={index}
                                          onClick={() => handleClickLink(router.pathname)}>
                                            <FontAwesomeIcon icon={item.icon as IconProp} className="me-2" size="lg"/>
                                            {item.name}
                                    </Link>
                                </Nav.Item>
                            ))
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}

export default NavBar;