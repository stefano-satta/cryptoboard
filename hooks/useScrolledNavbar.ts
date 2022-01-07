import {RefObject, useEffect} from "react";

const useScrolledNavbar = (refNavbar: RefObject<HTMLDivElement>) => {
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 50) {
                refNavbar.current?.classList.add('shadow-navbar-scrolled')
            } else {
                refNavbar.current?.classList.remove('shadow-navbar-scrolled')
            }
        })
    })    
}

export default useScrolledNavbar;