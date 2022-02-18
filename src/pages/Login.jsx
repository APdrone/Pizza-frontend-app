import React from "react";
// import Navigation from "./Navigation";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "../store/userSlice";

const Login = ({ history }) => {
  // const [loggedin, setLoggedIn] = useState(false);

  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitUserDetail = async (e) => {
    e.preventDefault();
    const creds = {
      email: username,
      password: password,
    };
    // console.log(username, password);
    try {
      const resp = await fetch("http://127.0.0.1:4000/api/v1/users/login", {
        // const resp = await fetch(
        //   "https://pizzalover-backend-app.herokuapp.com/api/v1/users/login",
        //  {
        method: "POST",
        body: JSON.stringify(creds),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      if (!resp.ok) throw new Error(`${resp.status}`);
      const data = await resp.json();
      // console.log("data from API ::", data);
      if (data.role === "user") {
        dispatch(logIn(data.name));
        history.push("/home");
      } else if (data.role === "admin") {
        dispatch(logIn(data.name));
        history.push("/admin/home");
      }
      // setLoggedIn(true);
    } catch (err) {
      console.log("Error on fetch", err);
      setError(true);
    }
  };
  return (
    <div>
      <header className="navbar py px">
        <h1>PIZZA LOVERS.</h1>
        <nav>
          <ul className="menu-items">
            <NavLink
              activeStyle={{ color: "green" }}
              to="/forgotPassword"
              className="nav-link"
            >
              Forgot Password
            </NavLink>
          </ul>
        </nav>
      </header>
      <main>
        <div className="login-container">
          <form onSubmit={submitUserDetail} className="user-form">
            <div className="user-input">
              {/* <label htmlFor="user">Username</label> */}
              <h1>UserName(Email)</h1>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="user-input">
              <h1>Password</h1>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="error">
              {error && <p>Please provide correct email and password </p>}
            </div>
            <div className="btn-login">
              <button className="btn btn-primary " type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
