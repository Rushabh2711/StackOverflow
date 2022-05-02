import express from "express";
import cors from "cors";
import { frontendIP, frontendPort } from "./config/serverConfig.js";

const app = express();
// app.use(
//   cors({ origin: `http://${frontendIP}:${frontendPort}`, credentials: true })
// );

var corsOptions = {
  origin: "http://team7-1-540514524.us-west-1.elb.amazonaws.com:3001/",
  "Access-Control-Allow-Origin": "*",
  credentials: "true",
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hi from Stackoverflow!");
});

export default app;
