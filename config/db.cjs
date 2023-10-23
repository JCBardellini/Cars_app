const mongoose = require("mongoose");

let connectionString = `mongodb+srv://jcbardellini12:${process.env.MONGO_PASS}@cluster0.zisnwcn.mongodb.net/Cars?retryWrites=true&w=majority`;

// console.log(connectionString);

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// log when connected
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB!");
});