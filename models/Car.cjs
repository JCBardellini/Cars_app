
const mongoose = require("mongoose");

const carsSchema = new mongoose.Schema(
    {
        name: String,
        brand: String,
        color: String,
        readyToDrive: Boolean,
    },
    {
        timestamps: true,
    }
);

const Car = mongoose.model("Car", carsSchema);

module.exports = Car