import conn from "../../../db/config/mysql.config.js";
import UserDetails from "../../../db/models/mongo/userDetails.js";
import User from "../../../db/models/sql/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserActivities from "../../../db/models/mongo/userActivity.js";
import Posts from "../../../db/models/mongo/posts.js";

export class UserController {
  login = async (req, res) => {
    try {
      const { emailId, password } = req.body;
      const user = await User.findOne({ where: { emailId: emailId } });
      console.log(user);

      if (user === null) {
        return res.status(400).send(
          {
            errors: {
              email: { msg: `Email ${emailId} is not registered with us` },
            },
          },
          null
        );
      }
      if (!bcrypt.compareSync(password, user.password)) {
        return res
          .status(400)
          .send({ errorMsg: "Incorrect password. Please try again!" });
      }

      try {
        const response = await UserDetails.findOne({ emailId: emailId });
        res.status(200).send(response);
      } catch (err) {
        console.error(err);
        res.status(400).send(err);
      }
      let response = response;
      return res.status(200).send(response);
    } catch (error) {
      console.error(error);
    }
  };

  signup = async (req, res) => {
    const { emailId, username, password, accountType } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    let time = new Date();

    const userObj = await User.findOne({ where: { emailId: emailId } });

    console.log(userObj);
    if (userObj !== null) {
      return res.status(400).send(
        {
          errors: {
            email: {
              msg: `Email ${emailId} is already registered. Please login or use a different email`,
            },
          },
        },
        null
      );
    }

    const user = new UserDetails({
      emailId: emailId,
      username: username,
      accountType: accountType,
      joiningDate: time.toISOString(),
      visitedTime: time.toISOString(),
    });

    // console.log(user._id.toISOString());
    console.log(user);
    user
      .save()
      .then(() => {
        console.log(emailId),
          console.log(hashedPassword),
          console.log(username),
          console.log(accountType);
        // console.log(emailId),
        let userObject = {
          emailId: emailId,
          password: hashedPassword,
          username: username,
          accountType: accountType,
          userId: user._id.toString(),
        };
        const newMember = new User(userObject).save();

        const jwtPayload = { userObject };
        jwt.sign(jwtPayload, "virag02865490", (err, token) => {
          if (err) {
            console.error(err);
            res.status(500).send(err);
          }

          userObject.token = token;
          delete userObject.password;
          return res.status(200).send(userObject);
        });
      })
      .catch((error) => {
        res.status(500).json({
          error: error,
        });
      });
  };

  getAllUsers = async (req, res) => {
    try {
      const response = await UserDetails.find({});
      console.log(response);
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

  editUser = async (req, res) => {
    const { _id, about, city, country } = req.body;
    const data = { city: city, country: country };
    console.log(data);
    try {
      const response = await UserDetails.findByIdAndUpdate(_id, {
        location: data,
        about: about,
      });
      console.log("user profile updated", response);
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

  fetchUserActivity = async (req, res) => {
    const { userId } = req.params;
    let results = [];
    try {
      const activities = await UserActivities.find({_id : userId}, {userId : 0});

      activities.map(async (activity) => {
        let postId = activity.postId;
        let title = await Posts.findById({_id : postId});
        activity.title = title;
        results.push(activity);
      });

      console.log("user activity", response);
      res.status(200).send(response);
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  }
}

export default UserController;
