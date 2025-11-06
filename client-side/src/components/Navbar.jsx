import React from "react";
import { useState } from "react";
import "../styles/nav.css"

const Navbar = () => {
const [nav, setNav] = useState(false);

const togglebar = () => {
    setNav(!nav)
}
    return(
     <>
        <div className="high_order_nav_container">

        <div className="nav_container">
            <li>
                <ul>
                    <a href="/">Home</a>
                </ul>
                <ul>
                    <a href="/">About</a>
                </ul>
                <ul>
                    <a href="/">Services</a>
                </ul>
                <ul>
                    <a href="/">Contact</a>
                </ul>
            </li>
        </div>

        <div className="icon_container" onClick={() => togglebar()}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 hurmburger">
        <path fillRule="evenodd" d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>

        </div>
        </div>

        <div className={nav ? 'overlay' : 'overlayTwo'}></div>

        <div className={nav ? "sidenav" : "sidenavTwo"}>
            <li>
                <ul>
                    <a href="/">Home</a>
                </ul>
                <ul>
                    <a href="/">About</a>
                </ul>
                <ul>
                    <a href="/">Services</a>
                </ul>
                <ul>
                    <a href="/">Contact</a>
                </ul>
            </li>
            </div>
    </>
    )
}

export default Navbar