import mongoose from "mongoose";
import app from "../../../app.js";

const mongoInit = () => {
  let mongoUri =
    "mongodb+srv://root:ylSa1QF0B4cv61BT@cluster0.s2g55.mongodb.net/stackoverflow?retryWrites=true&w=majority";
  try {
    mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 500,
    });
    console.log("Mongoose is connected!");
    app.listen(3001, () => {
      console.log("Server listening on port 3001");
    });
  } catch (err) {
    console.error("Could not connect Mongoose => ", err);
  }
};

export default mongoInit;
