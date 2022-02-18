import React from "react";
import CartPrice from "./CartPrice";
import Navigation from "./Navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddOrder, AddonOrder } from "../store/cartSlice";
import Addon from "./Addon";

const Customise = () => {
  const dispatch = useDispatch();

  const totalVeggies = {
    "Grilled Mushrooms": false,
    Onion: false,
    Capsicum: false,
    "Fresh Tomato": false,
    Jalapeno: false,
    "Golden corn": false,
  };

  const totalMeat = {
    "Barbecue Chicken": false,
    "Peri - Peri Chicken": false,
    "Grilled Chicken Rasher": false,
    "Chicken Tikka": false,
    "Chicken Pepperoni": false,
    "Chicken Sausage": false,
  };

  const [base, setBase] = useState("");
  const [sauce, setSauce] = useState("");
  const [cheesetype, setCheeseType] = useState("");
  const [veggies, setVeggies] = useState([]);
  const [meats, setMeats] = useState([]);
  const [addVeggies, setAddVeggies] = useState(totalVeggies);
  const [addMeat, setAddMeat] = useState(totalMeat);

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submit form");
    const cart = {
      pizzabase: base || "New Hand Tossed",
      sauce: sauce || "Red",
      cheese: cheesetype || "Mozzarella",
      veggies,
      meats,
    };
    console.log(cart);

    dispatch(AddOrder(cart));
  };

  const handleVeggiesClick = (ingredient) => {
    const updatedVeggies = { ...addVeggies };
    updatedVeggies[ingredient] = !updatedVeggies[ingredient];
    setAddVeggies(updatedVeggies);

    console.log("clicked");

    //  dispatch(
    //     AddonOrder({
    //       name: ingredient,
    //       addIngredient: updatedVeggies[ingredient],
    //     })
    //   );
    // distpatchAddition(ingredient, updatedVeggies);

    if (updatedVeggies[ingredient]) {
      const NewVeggies = [...veggies];
      NewVeggies.push(ingredient);
      setVeggies(NewVeggies);
      console.log(veggies);
    } else {
      const filterveggies = veggies.filter((veggie) => veggie !== ingredient);
      setVeggies(filterveggies);
    }
  };

  // const distpatchAddition = (ingredient, updatedVeggies) => {
  //   dispatch(
  //     AddonOrder({
  //       name: ingredient,
  //       addIngredient: updatedVeggies[ingredient],
  //     })
  //   );
  // };

  const handleMeatClick = (ingredient) => {
    const updatedMeats = { ...addMeat };
    updatedMeats[ingredient] = !updatedMeats[ingredient];
    // console.log(updatedVeggies);
    setAddMeat(updatedMeats);
    // console.log("addVeggies ::", addVeggies);
  };

  const handleChange = ({ target: { name, value } }) => {
    // console.log("handle change", e.target.name);
    switch (name) {
      case "base": {
        setBase(value);
        break;
      }
      case "Sauce": {
        setSauce(value);
        break;
      }
      case "CheeseType": {
        setCheeseType(value);
        break;
      }
      default: {
        console.log("none");
      }
    }
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
                value={base}
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
            <button className="btn btn-primary " type="submit">
              Add to Cart
            </button>
          </form>
          <div className="veggies-main">
            <h2>Veggies</h2>
            <div className="veggies-item">
              <Addon
                name={"Grilled Mushrooms"}
                handlefn={handleVeggiesClick}
                veggies={addVeggies}
              />
              <Addon
                name={"onion"}
                handlefn={handleVeggiesClick}
                veggies={addVeggies}
              />
              <Addon
                name={"Capsicum"}
                handlefn={handleVeggiesClick}
                veggies={addVeggies}
              />
              <Addon
                name={"Fresh Tomato"}
                handlefn={handleVeggiesClick}
                veggies={addVeggies}
              />
              <Addon
                name={"Jalapeno"}
                handlefn={handleVeggiesClick}
                veggies={addVeggies}
              />
              <Addon
                name={"Golden corn"}
                handlefn={handleVeggiesClick}
                veggies={addVeggies}
              />
            </div>
          </div>
          <div className="meat-main">
            <h2 className="meat-item-heading">Meat</h2>
            <div className="meat-item">
              <Addon
                name={"Barbecue Chicken"}
                handlefn={handleMeatClick}
                veggies={addVeggies}
              />
              <Addon
                name={"Peri - Peri Chicken"}
                handlefn={handleMeatClick}
                veggies={addVeggies}
              />
              <Addon
                name={"Grilled Chicken Rasher"}
                handlefn={handleMeatClick}
                veggies={addVeggies}
              />
              <Addon
                name={"Chicken Tikka"}
                handlefn={handleMeatClick}
                veggies={addVeggies}
              />
              <Addon
                name={"Chicken Pepperoni"}
                handlefn={handleMeatClick}
                veggies={addVeggies}
              />
              <Addon
                name={"Chicken Sausage"}
                handlefn={handleMeatClick}
                veggies={addVeggies}
              />
            </div>
          </div>
        </div>
        <div className="vertical"></div>
        <div>
          <CartPrice />
        </div>
      </div>
    </>
  );
};

export default Customise;
