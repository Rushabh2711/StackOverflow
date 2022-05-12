import conn from "../../../db/config/mysql.config.js";
import UserDetails from "../../../db/models/mongo/userDetails.js";
import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

export class UserController {
  login = async (req, res) => {
    try {
      console.log("Inside backend login", req.body);
      let sql = "SELECT * FROM users WHERE emailId = ?";
      const emailId = req.body.emailId;
      const password = req.body.password;

      conn.query(sql, [emailId], function (err, result) {
        if (err) throw err;
        else if (result.length == 0) {
          console.log("hii");
          res.status(404).send({
            message: "User not found",
          });
        } else {
          if (bcrypt.compareSync(password, result[0].password)) {
            res.status(200).send(result);
          } else {
            res.status(400).send({
              message: "Invalid Credentials",
            });
          }
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  // signup = async (req, res) => {
  //   try {
  //     const { emailId, username, password, accountType } = req.body;
  //     const hashpassword = await bcrypt.hash(password, 10);
  //     console.log(emailId);
  //     console.log(username);
  //     console.log(password);
  //     console.log(accountType);
  //     let sql =
  //       "INSERT INTO users (id, username, emailId, password, accountType) values ('" +
  //       uuidv4() +
  //       "','" +
  //       username +
  //       "','" +
  //       emailId +
  //       "','" +
  //       hashpassword +
  //       "','" +
  //       accountType +
  //       "')";
  //     conn.query(
  //       sql,

  //       function (err, result) {
  //         //   if (err) {
  //         //     res.status(500);
  //         //     console.log(err);
  //         //     res.send("SQL error, Check log for more details");
  //         //   }
  //         //   else {
  //         console.log("newuser");
  //         const id = result.insertId;
  //         const newuser = new UserDetails({
  //           userId: id,
  //           emailId: emailId,
  //           username: username,
  //           accountType: accountType,
  //         });
  //         console.log(newuser);
  //         newuser.save();
  //         res.status(200);
  //         res.send({ message: "User Created" });
  //         //   }
  //       }
  //     );
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  signup = async (req, res) => {
    console.log("Sign up");
    let time = new Date();
    try {
      const newUser = new UserDetails({
        username: req.body.username,
        emailId: req.body.emailId,
        password: req.body.password,
        accountType: "user",
        joiningDate: time.toISOString(),
        visitedTime: time.toISOString(),
      });
      const response = await newUser.save();
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      if (err.code === 11000) {
        res.status(200).end("Email already in use");
      } else {
        res.status(400).end(err);
      }
    }
  };

  getAllUsers = async (req, res) => {
    try {
      const response = await UserDetails.find({});
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };

  getuser = async (req, res) => {
    const { userId } = req.params;
    try {
      const response = await UserDetails.find({ _id: userId });
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };

  bookmarkQuestion = async (req, res) => {
    const { userId, questionId } = req.body;
    try {
      const response = await UserDetails.findByIdAndUpdate(
        userId,
        {
          $push: { bookmarkedQuestions: questionId },
        },
        {
          upsert: true,
          new: true,
        }
      );
      console.log("bookmark questions added", response);
      res.status(200).send("bookmark added");
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };

  removeBookmarkQuestion = async (req, res) => {
    const { userId, questionId } = req.body;
    try {
      const response = await UserDetails.findByIdAndUpdate(
        userId,
        {
          $pull: { bookmarkedQuestions: questionId },
        },
        {
          upsert: true,
          new: true,
        }
      );
      console.log("bookmark questions removed", response);
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  };
}

export default UserController;
