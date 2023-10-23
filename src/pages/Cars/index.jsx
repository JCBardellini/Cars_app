import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

const Cars = () => {
  const [displayCars, setDisplayCars] = useState([]);
  // now we going to get the data from localhost:3000(/server)

  useEffect(() => {
    axios({
      method: "GET",
      url: "/server/cars",
    }).then((res) => {
      //   console.log(res);
      setDisplayCars(res.data);
    });
  }, []);
  //   console.log(displayCars);
  // will display the cars when i get the data
  return (
    <div>
      {displayCars.map((car) => {
        return (
          <div key={car._id}>
            <h3>Car name: {car.name}</h3>
            <p>Brand: {car.brand}</p>
            <p>Color: {car.color}</p>
            <h3>Drive: {car.readyToDrive ? "yes" : "no"}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Cars;
