import React from "react";

const Addon = ({ name, handlefn, veggies }) => {
  return (
    <div>
      <h2>{name}</h2>
      <button className="btn-sm " type="submit" onClick={() => handlefn(name)}>
        {veggies[name] ? "Remove" : "Add"}
      </button>
    </div>
  );
};

export default Addon;
