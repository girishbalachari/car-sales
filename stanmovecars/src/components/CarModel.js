import React from "react";

const CarModel = ({ carData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {carData.map((car, ind) => {
          const { id, Make, Model, Condition, Discount, Price, Date } = car;

          return (
            <div key={ind} className="card-container">
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <br />
                  <span className="card-title">{Make}</span>
                  <h2 className="card-author subtle">{Model}</h2>
                  <span className="card-author subtle">{Condition}</span>
                  <br /> <br /> <br />
                  <div>
                    <span className="card-author subtle">{Discount}</span>
                    <span className="card-tag subtle">€ {Price}</span>
                  </div>
                  <br />
                  <br />
                  <div className="card-read">{Date}</div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default CarModel;
