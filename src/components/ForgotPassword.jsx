import React from "react";
import { useState } from "react";

const ForgotPassword = ({ history }) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const submitUserDetail = async (e) => {
    e.preventDefault();
    if (username.length < 1) {
      setError(true);
      return;
    }
    const creds = {
      email: username,
    };
    // console.log(username, password);
    try {
      const resp = await fetch(
        // "http://127.0.0.1:4000/api/v1/users/forgotPassword",
        "https://pizzalover-backend-app.herokuapp.com/api/v1/users/forgotPassword",
        {
          method: "POST",
          body: JSON.stringify(creds),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      );
      if (!resp.ok) throw new Error(`${resp.status}`);
      const data = await resp.json();
      console.log(data);
      if (data) {
        setValid(true);
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

            <div className="error">
              {error && <p>Please provide valid email </p>}
              {valid && <p>Email Sent! Please check your inbox</p>}
            </div>
            <div className="btn-login">
              <button className="btn btn-primary " type="submit">
                Reset Password
              </button>
              <button
                className="btn btn-secondary "
                type="submit"
                onClick={() => history.replace("/login")}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ForgotPassword;
