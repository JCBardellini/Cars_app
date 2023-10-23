import axios from "axios";
import React, { useState } from "react";

const CreateCars = () => {
  const [createCars, setCreateCars] = useState({
    name: "",
    brand: "",
    color: "",
    readyToDrive: false,
  });

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!createCars.name || !createCars.brand || !createCars.color) {
      setError("Please enter all information");
      return;
    }
    console.log(createCars);
    axios({
      method: "POST",
      url: "/server/cars",
      data: createCars,
    }).then((res) => {
      console.log(res);
      setCreateCars({
        name: "",
        brand: "",
        color: "",
        readyToDrive: false,
      });
      setError("");
    });
  };

  const handleChange = (e) => {
    // have to destructure the object and set equal to e.target for it to work
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setCreateCars({ ...createCars, [name]: checked });
    } else {
      setCreateCars({ ...createCars, [name]: value });
    }
  };

  return (
    <div>
      <h1>Enter your car information:</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name of the Car: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={createCars.name}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="brand">Brand: </label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={createCars.brand}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="color">Color: </label>
          <input
            type="text"
            id="color"
            name="color"
            value={createCars.color}
            onChange={handleChange}
          />
          <br />
          <label htmlFor="readyToDrive">Ready to Drive: </label>
          <input
            type="checkbox"
            id="readyToDrive"
            name="readyToDrive"
            checked={createCars.readyToDrive}
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCars;
