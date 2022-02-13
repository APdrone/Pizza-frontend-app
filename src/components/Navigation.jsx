import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <header className="navbar py px">
        <h1>PIZZA LOVERS.</h1>
        <nav>
          <ul className="menu-items">
            <NavLink
              activeStyle={{ color: "green" }}
              to="/cart"
              className="nav-link"
            >
              View Cart
            </NavLink>

            <li>Name/User Profile</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navigation;
