import React, { BaseHTMLAttributes, FC } from "react"
import Footer from "./Footer";
import SidebarNav from "./SidebarNav";

const RouterLayout: FC<BaseHTMLAttributes<HTMLElement>> = ({children}) => {
    return (<>
        <div>
            <SidebarNav/>
            
            <div id="page-content-wrapper">
                <div className="py-5 px-5 bg-wall h-100">
                    {children}
                </div>
                <Footer/>
            </div>
            
        </div>
    </>)
}

export default RouterLayout;