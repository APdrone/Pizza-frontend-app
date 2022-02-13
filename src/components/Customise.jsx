import React from "react";
import CartPrice from "./CartPrice";
import Navigation from "./Navigation";

const Customise = () => {
  const submitForm = () => {
    console.log("submit form");
  };

  const handleChange = () => {
    console.log("handle change");
  };

  return (
    <>
      <Navigation />
      <div className="Customise-page">
        <div>
          <h1>Customise your Pizza</h1>
          <form onSubmit={submitForm}>
            <div className="customise-dropdowns">
              {/* <label htmlFor="Base">Pizza Base</label> */}
              <h2>Pizza Base</h2>
              <select
                name="Base"
                id="Base"
                className=""
                //   value={Base}
                onChange={handleChange}
              >
                <option value="New Hand Tossed">New Hand Tossed</option>
                <option value="Wheat">Wheat</option>
                <option value="Cheese Burst">Cheese Burst</option>
              </select>
            </div>

            <div className="customise-dropdowns">
              {/* <label htmlFor="Sauce"> Sauce</label> */}
              <h2>Sauce</h2>
              <select
                name="Sauce"
                id="Sauce"
                className=""
                //   value={Base}
                onChange={handleChange}
              >
                <option value="Red">Red</option>
                <option value="black">Black</option>
                <option value="White">White</option>
              </select>
            </div>

            <div className="customise-dropdowns">
              {/* <label htmlFor="CheeseType">CheeseType</label> */}
              <h2>CheeseType</h2>
              <select
                name="CheeseType"
                id="CheeseType"
                className=""
                //   value={Base}
                onChange={handleChange}
              >
                <option value="Mozzarella">Mozzarella</option>
                <option value="Blue Cheese">Blue Cheese</option>
                <option value="Feta">Feta</option>
              </select>
            </div>
          </form>
          <div className="veggies-main">
            <h2>Veggies</h2>
            <div className="veggies-item">
              <div>
                <h2>Grilled Mushrooms</h2>
                <button className="btn-sm ">Add</button>
              </div>
              <div>
                <h2>Onion</h2>
                <button className="btn-sm ">Add</button>
              </div>
              <div>
                <h2>Capsicum</h2>
                <button className="btn-sm ">Add</button>
              </div>
              <div>
                <h2>Fresh Tomato</h2>
                <button className="btn-sm ">Add</button>
              </div>
              <div>
                <h2>Jalapeno</h2>
                <button className="btn-sm ">Add</button>
              </div>
              <div>
                <h2>Golden corn</h2>
                <button className="btn-sm ">Add</button>
              </div>
            </div>
          </div>
          <div className="meat-main">
            <h2 className="meat-item-heading">Meat</h2>
            <div className="meat-item">
              <div>
                <h2>Barbecue Chicken</h2>
                <button className="btn-sm ">Add</button>
              </div>
              <div>
                <h2>Peri - Peri Chicken</h2>
                <button className="btn-sm ">Add</button>
              </div>
              <div>
                <h2>Grilled Chicken Rasher</h2>
                <button className="btn-sm ">Add</button>
              </div>
              <div>
                <h2>Chicken Tikka</h2>
                <button className="btn-sm ">Add</button>
              </div>
              <div>
                <h2>Chicken Pepperoni</h2>
                <button className="btn-sm ">Add</button>
              </div>
              <div>
                <h2>Chicken Sausage</h2>
                <button className="btn-sm ">Add</button>
              </div>
            </div>
          </div>
        </div>
        <div class="vertical"></div>
        <div>
          <CartPrice />
        </div>
      </div>
    </>
  );
};

export default Customise;
