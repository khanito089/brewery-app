import React from 'react';
import { NavLink } from "react-router-dom";

function Header() {
    return (
    
    <div className="header">
         <header>
             <h1>Brewery Search</h1>
            <ul>
              <li><NavLink ClassName="nav-link" activeClassName="nav-link-active" to="/">
                Home
              </NavLink></li>
              <hr/>
              <li><NavLink ClassName="nav-link" activeClassName="nav-link-active" to="/About">
                About
              </NavLink></li>
              <hr/>
              <li><NavLink ClassName="nav-link" activeClassName="nav-link-active" to="/Contact">
                Contact
              </NavLink></li>
             </ul>
        </header>
    </div>
    
    );
}

export default Header;