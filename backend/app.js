import express from "express";
import cors from "cors";
import { frontendIP, frontendPort } from "./config/serverConfig.js";

const app = express();
// app.use(
//   cors({ origin: `http://${frontendIP}:${frontendPort}`, credentials: true })
// );

var corsOptions = {
  origin: `http://${frontendIP}:${frontendPort}`,
  "Access-Control-Allow-Origin": "*",
  credentials: "true",
};

app.use(cors(corsOptions));

app.use(express.json({ limit: '50mb'}));

app.use(
  express.urlencoded({
    extended: false,
  })
);

app.get("/", (req, res) => {
  res.send("Hi from Stackoverflow!");
});

export default app;
