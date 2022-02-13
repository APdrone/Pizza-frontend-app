import React from "react";
import Dashboard from "./Dashboard";
import Navigation from "./Navigation";

const Home = ({ history }) => {
  // console.log("history ::", history);
  return (
    <div>
      <Navigation />
      <Dashboard history={history} />
      {/* Home */}
    </div>
  );
};

export default Home;
