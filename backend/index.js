const express = require("express");
var app = express();

const { mongoDB } = require("./mongoConfig");
const mongoose = require("mongoose");

var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 50,
};

mongoose.connect(mongoDB, options, (err, res) => {
  if (err) {
    console.log(err);
    console.log(`MongoDB Connection Failed`);
  } else {
    // auth();
    console.log(`MongoDB Connected`);
  }
});

app.get("/", (req, res) => {
  res.send("Hi from Stackoverflow!");
});

app.listen(3000);
