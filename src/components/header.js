import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";

function Header() {
    const location = useLocation();
return (

    <header className="header-container">
        <section className="header">
            <div className="logo-box">
                <h2 className="logo">Welcome</h2>
            </div>
            <input type="checkbox" id="chk"></input>
            <label for="chk" className="show-menu-btn">
                <i className="fas fa-ellipsis-h"></i>
            </label>

            <ul className="menu">
                <li className="text-menu">
                    <Link 
                    to="/about"
                    className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                    >
                    About
                    </Link>
                </li>
                <li className="text-menu">
                    <Link
                    to="portfolio"
                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                    >
                    Portfolio
                    </Link>
                </li> 
                <li className="text-menu">
                    <Link 
                    to="contact"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                    >
                    Contact
                    </Link>
                </li>
                <label for="chk" className="hide-menu-btn">
                    <i className="fas fa-times-circle"></i>
                </label>
            </ul>
        </section>
    </header>
)
}

export default Header;