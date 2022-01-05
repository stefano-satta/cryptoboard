import React, { BaseHTMLAttributes, FC } from "react"
import Footer from "./Footer";
import SidebarNav from "./SidebarNav";
import NavBar from "./NavBar";

const RouterLayout: FC<BaseHTMLAttributes<HTMLElement>> = ({children}) => {
    return (<>
        <div>
            {/* <SidebarNav/> */}
            <NavBar/>
            
            <div id="page-content-wrapper">
                <div className="py-5 px-4 px-md-5 bg-wall h-100">
                    {children}
                </div>
                <Footer/>
            </div>
            
        </div>
    </>)
}

export default RouterLayout;