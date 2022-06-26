require("dotenv").config();
const routes = require("./routes/routes");
const express = require("express");
const mongoose = require("mongoose");
const mongoString = "mongodb://localhost:27017/blockingbad";
var cors = require("cors");


mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

const app = express();
app.use(cors());
console.log("cors enabled");

app.use(express.json());



app.use("/api/routes", routes);
app.listen(8000, () => {
  console.log(`Server Started at ${8000}`);
});
