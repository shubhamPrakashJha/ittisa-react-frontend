import React from "react";
import { NavLink, Link } from "react-router-dom";
import icon from "../../assets/icon.png";
import "./navBar.css";

function NavBar() {
    return (
        <nav className="navbar navbar-light navbar-expand-md">
            <Link className="navbar-brand" to="/home">
                <img src={icon} alt="icon" />
            </Link>
            <button
                className="navbar-toggler collapsed"
                data-toggle="collapse"
                data-target="#navcol-1"
                aria-expanded="false"
            >
                <span className="sr-only">Toggle navigation</span>
                <span className="navbar-toggler-icon" />
            </button>
            <div
                className="navbar-collapse flex-row-reverse collapse"
                id="navcol-1"
            >
                <ul className="nav navbar-nav">
                    <li className="nav-item" role="presentation">
                        <NavLink className="nav-link" to="/home">
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                        <NavLink className="nav-link" to="/messages">
                            Messages
                        </NavLink>
                    </li>
                    <li className="nav-item" role="presentation">
                        <NavLink className="nav-link" to="/contact/new">
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
