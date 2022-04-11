const express = require("express");
var app = express();
const cors = require('cors');

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

var corsOptions = {
  'origin': "http://localhost:3000",
  'Access-Control-Allow-Origin': '*',
  'credentials': 'true'
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hi from Stackoverflow!");
});

app.listen(3001, () => {
  console.log('server is up and running on port 3001');
})
