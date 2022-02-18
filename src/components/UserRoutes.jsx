import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Customise from "./Customise";
// import Dashboard from "./Dashboard";
import Login from "../pages/Login";
import Home from "./Home";
import Admin from "../pages/Admin";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
import Cart from "../pages/Cart";
import { useSelector } from "react-redux";
import Logout from "../pages/Logout";

const UserRoutes = () => {
  const loggedInState = useSelector((state) => state.user.isLoggedin);
  // console.log("loggedInState ::", loggedInState);
  return (
    <Switch>
      {/* <Route
        path="/ResetPassword/:id"
        render={(routeConfig) => <ResetPassword type="edit" {...routeConfig} />}
      /> */}
      <Route path="/ResetPassword/:id" component={ResetPassword} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />

      {loggedInState && (
        <Switch>
          <Route path="/customise" component={Customise} />
          <Route path="/home" component={Home} />
          <Route path="/admin/home" component={Admin} />
          <Route path="/Cart" component={Cart} />
        </Switch>
      )}

      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};

export default UserRoutes;
