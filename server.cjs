const express = require("express");
const cors = require("cors");
const morgan = require("morgan")
const path = require("path")
const PORT = 3000;

// bringing in my model
const Car = require("./models/Car.cjs")

// connecting to the DB
require('dotenv').config()
require("./config/db.cjs")

const app = express();

// START MIDDLEWARE //

const middleware = (req, res, next) => {
    console.log("doing things");
    next();
}
// allows me to call e
app.use(
    cors({
    origin: "*",
})
);

app.use(morgan("dev"))

app.use(middleware)

app.use(express.json())

// END MIDDLEWARE //

// ROUTES //

app.get("/", (req, res) => {
    res.send("Cars server page")
})
app.get("/cars", async (req, res) => {
    let carsFromDB = await Car.find();
    console.log(carsFromDB);
    res.send(carsFromDB)
})
app.post("/cars", async (req, res) => {
    let car = await Car.create(req.body)
    res.send(car)
})

// PORT //

app.listen(PORT, (req, res) =>{
    console.log(`Server is running on port ${PORT}`)
})