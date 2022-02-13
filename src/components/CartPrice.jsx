import React from "react";

const CartPrice = () => {
  return (
    <div className="Cart-price">
      <h2>Cart List</h2>
      <h3>Pizza: Pizza price</h3>
      <h3>Additional Veggies: price</h3>
      <h3>Additional Meat: price</h3>
      <h2>Total Price: total</h2>
      <div className="cart-price-btn">
        <button className="btn">Pay</button>
        <button className="btn">Cancel</button>
      </div>
    </div>
  );
};

export default CartPrice;
