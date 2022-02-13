import React from "react";
// import { NavLink } from "react-router-dom";

const Dashboard = ({ history }) => {
  console.log("history ::", history);
  return (
    <>
      <main className="main-container">
        <section className="main-content">
          <div className="pizza-content">
            <img
              className="pizza-img"
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Cheese Dominator"
            />
            <div className="pizza-content-text">
              <h2>The Cheese Dominator</h2>
              <p>
                Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese on a
                Classic Large Pizza topped with a generous helping of herb
                sprinkle
              </p>
            </div>
            <div className="pizza-action">
              {/* <NavLink activeStyle={{ color: "green" }} to="/cart">
                Customise
              </NavLink> */}
              {/* <a href="#" className="btn btn-secondary">
                Customise
              </a>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a> */}

              <button
                onClick={() => history.push("/customise")}
                className="btn btn-secondary"
              >
                Customise
              </button>

              {/* <button className="btn btn-primary">Add to Cart</button>
               */}
              <h3 className="price">Price:Rs 600</h3>
            </div>
          </div>
          <div className="pizza-content">
            <img
              className="pizza-img"
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Cheese Dominator"
            />
            <div className="pizza-content-text">
              <h2>The Cheese Dominator</h2>
              <p>
                Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese on a
                Classic Large Pizza topped with a generous helping of herb
                sprinkle
              </p>
            </div>
            <div className="pizza-action">
              <a href="#" className="btn btn-secondary">
                Customise
              </a>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
          <div className="pizza-content">
            <img
              className="pizza-img"
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Cheese Dominator"
            />
            <div className="pizza-content-text">
              <h2>The Cheese Dominator</h2>
              <p>
                Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese on a
                Classic Large Pizza topped with a generous helping of herb
                sprinkle
              </p>
            </div>
            <div className="pizza-action">
              <a href="#" className="btn btn-secondary">
                Customise
              </a>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
          <div className="pizza-content">
            <img
              className="pizza-img"
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Cheese Dominator"
            />
            <div className="pizza-content-text">
              <h2>The Cheese Dominator</h2>
              <p>
                Loaded with 1 Pound of Mozzarella and gooey Liquid Cheese on a
                Classic Large Pizza topped with a generous helping of herb
                sprinkle
              </p>
            </div>
            <div className="pizza-action">
              <a href="#" className="btn btn-secondary">
                Customise
              </a>
              <a href="#" className="btn btn-primary">
                Add to Cart
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;
