import React, { BaseHTMLAttributes, FC } from "react"
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import SidebarNav from "./SidebarNav";

const RouterLayout: FC<BaseHTMLAttributes<HTMLElement>> = ({children}) => {
    return (<>
        <div className="d-flex">
            <div id="sidebar-wrapper">
                <SidebarNav/>
            </div>
            
            <div id="page-content-wrapper">
                <div  className="py-5 px-3 bg-wall">
                    {children}
                </div>
                <Footer/>
            </div>
            
        </div>
    </>)
}

export default RouterLayout;