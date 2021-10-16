import React from "react";

const Navbar = ({ carMake, navList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {navList.map((car, ind) => {
            return (
              <button
                className="btn-group__item"
                key={ind}
                onClick={() => carMake(car)}
              >
                {car}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
