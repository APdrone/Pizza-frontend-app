import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/userSlice";

const Navbar = ({ logoutUser }) => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector((state) => state.user.isLoggedin);

  if (logoutUser) {
    dispatch(logout());
  }
  return (
    <div>
      <header className="navbar py px">
        <h1>PIZZA LOVERS.</h1>

        <nav>
          <ul className="menu-items">
            {loggedInUser && (
              <NavLink
                activeStyle={{ color: "green" }}
                to="/cart"
                className="nav-link"
              >
                View Cart
              </NavLink>
            )}
            <NavLink
              activeStyle={{ color: "green" }}
              to={loggedInUser ? "/logout" : "/login"}
              className="nav-link"
            >
              {loggedInUser ? "Log out" : "Log in"}
            </NavLink>

            {loggedInUser && (
              <li className="user-profile">
                {loggedInUser}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clipRule="evenodd"
                  />
                </svg>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
