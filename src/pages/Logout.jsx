import React from "react";
import Navbar from "../components/Navbar";
// import { useDispatch } from "react-redux";

const Logout = () => {
  // const dispatch=useDispatch();

  return (
    <div>
      <Navbar logoutUser={true} />
      <p className="center-content font-xl">
        Thanks for visiting our website. Hope you had a wonderful experience
      </p>
    </div>
  );
};

export default Logout;
