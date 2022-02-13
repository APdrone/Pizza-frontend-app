import React from "react";
import { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

const ResetPassword = () => {
  const history = useHistory();
  const match = useRouteMatch();
  //   console.log("history", history);
  //   console.log("match", match.params.id);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const submitPassword = async (e) => {
    e.preventDefault();
    console.log(password, confirmPassword, password !== confirmPassword);
    if (password !== confirmPassword) {
      setError(true);
      return;
    }
    const creds = {
      password: password,
      passwordConfirm: confirmPassword,
    };

    try {
      const resp = await fetch(
        // `http://127.0.0.1:4000/api/v1/users/resetPassword/${match.params.id}`,
        `https://pizzalover-backend-app.herokuapp.com/api/v1/users/resetPassword/${match.params.id}`,

        {
          method: "Patch",
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
      //   setError(true);
    }
  };
  return (
    <div>
      <header className="navbar py px">
        <h1>PIZZA LOVERS.</h1>
      </header>
      <main>
        <div className="login-container">
          <form onSubmit={submitPassword} className="user-form">
            <div className="user-input">
              <h1>Password</h1>
              <input
                // type="password"
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="user-input">
              <h1>Confirm Password</h1>
              <input
                // type="password"
                type="text"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="error">
              {error && <p>Passwords are not matching </p>}
              {valid && <p>Password Succesfully updated</p>}
            </div>
            <div className="btn-login">
              <button className="btn btn-primary " type="submit">
                Save Password
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

export default ResetPassword;
