import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Customise from "./Customise";
// import Dashboard from "./Dashboard";
import Login from "./Login";
import Home from "./Home";
import Admin from "./Admin";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import Cart from "./Cart";
const UserRoutes = () => {
  return (
    <Switch>
      {/* <Route
        path="/ResetPassword/:id"
        render={(routeConfig) => <ResetPassword type="edit" {...routeConfig} />}
      /> */}
      <Route path="/ResetPassword/:id" component={ResetPassword} />
      <Route path="/customise" component={Customise} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/admin/home" component={Admin} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/Cart" component={Cart} />
      <Route path="*">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};

export default UserRoutes;
