import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/">
                    <h1>LOGO</h1>
                </Link>
            </div>
            <div className="navCompoenetItems">
                <div className="navitem">
                    <Link to="/categories">
                        <h1>CATEGORY</h1>
                    </Link>
                </div>
                <div className="navitem">
                    <Link to="/authentication">
                        <h1>AUTH</h1>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
