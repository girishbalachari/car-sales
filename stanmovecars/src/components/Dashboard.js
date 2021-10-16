import React, { useState } from "react";
import Carsdata from "../Carsdata";
import CarModel from "./CarModel";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Carsdata.map((car) => {
      return car.Make;
    })
  ),
  "DashBoard",
];

const Dashboard = () => {
  const [carData, setcarData] = useState(Carsdata);
  const [navList] = useState(uniqueList);

  const carMake = (Make) => {
    if (Make === "DashBoard") {
      setcarData(Carsdata);
      return;
    }

    const updatedList = Carsdata.filter((car) => {
      return car.Make === Make;
    });
    setcarData(updatedList);
  };

  return (
    <>
      <Navbar carMake={carMake} navList={navList} />
      <CarModel carData={carData} />
    </>
  );
};

export default Dashboard;
