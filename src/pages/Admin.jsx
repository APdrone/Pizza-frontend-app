import React from "react";
import Navigation from "../components/Navigation";

const Admin = () => {
  return (
    <div>
      <Navigation />
      <div>
        <h1>Our Inventory- ADMIN VIEW</h1>

        <h2>Pizza Base</h2>
        <ul>
          <li>New Hand Tossed</li>
          <li>Wheat </li>
          <li>Cheese Burst </li>
        </ul>
        <h2>Sauce</h2>
        <ul>
          <li>Red </li>
          <li>Red </li>
          <li>Black </li>
          <li>White</li>
        </ul>
        <h2>CheeseType </h2>
        <ul>
          <li>Mozzarella </li>
          <li>Blue Cheese </li>
          <li>Feta </li>
        </ul>
        <h2>Veggies</h2>
        <ul>
          <li>Grilled Mushrooms </li>
          <li>Onion</li>
          <li>Capsicum </li>
          <li> Fresh Tomato</li>
          <li>Jalapeno</li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;
