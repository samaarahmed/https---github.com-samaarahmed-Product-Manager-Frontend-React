import React from 'react';
import { Link } from "react-router-dom";


function Header() {
    return (
        <div className="container">
    <header>
        <Link to={"/"}>Home</Link>
     </header>

        </div>
    );
}

export default Header;