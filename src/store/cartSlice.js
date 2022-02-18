import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quantites: {
    pizzabase: {
      "New Hand Tossed": 0,
      Wheat: 0,
      "Cheese Burst": 0,
    },
    sauce: {
      Red: 0,
      Black: 0,
      White: 0,
    },
    cheese: {
      Mozzarella: 0,
      "Blue Cheese": 0,
      Feta: 0,
    },
    veggies: {
      "Grilled Mushrooms": 0,
      Onion: 0,
      Capsicum: 0,
      "Fresh Tomato": 0,
      Jalapeno: 0,
      "Golden corn": 0,
    },
    meat: {
      "Barbecue Chicken": 0,
      "Peri - Peri Chicken": 0,
      "Grilled Chicken Rasher": 0,
      "Chicken Tikka": 0,
      "Chicken Pepperoni": 0,
      "Chicken Sausage": 0,
    },
  },
  cartOrder: {
    pizzabase: "",
    sauce: "",
    cheese: "",
    veggies: [],
    meat: [],
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddOrder: (state, action) => {
      console.log("added");
      state.cartOrder = action.payload;
      // console.log(state.cartOrder);
    },
    AddonOrder: (state, action) => {
      // const { name, addIngredient } = action.payload;
      // if (addIngredient) {
      //   state.cartOrder.veggies.push(name);
      // } else {
      //   state.cartOrder.veggies = state.cartOrder.veggies.filter(
      //     (veggie) => veggie !== name
      //   );
      // }
      // console.log(state.cartOrder);
      console.log("addonOrder", state.cartOrder);
    },
    removeOrder: (state, action) => {},
    AddQuantity: (state, action) => {},
    removeQuantity: (state, action) => {},
  },
});

export const {
  AddOrder,
  AddonOrder,
  removeOrder,
  AddQuantity,
  removeQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
