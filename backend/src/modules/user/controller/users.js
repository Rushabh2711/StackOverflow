import conn from "../../../db/config/mysql.config.js"
import UserDetails from "../../../db/models/mongo/userDetails.js";
import Questions from "../../../db/models/mongo/question.js";
import bcrypt from 'bcrypt';

export class UserController {
	login = async (req, res) => {
		try {
            console.log("Inside backend login", req.body);
            let sql = "SELECT * FROM users WHERE emailId = ?";
            const emailId = req.body.emailId;
            const password = req.body.password;
            
            conn.query(sql, [emailId], function (err, result) {
                if (err) throw err;
                else if(result.length==0){
                    console.log("hii");
                    res.status(404).send({
                    message: "User not found" });
                }
                else{
                    if (bcrypt.compareSync(password, result[0].password)) {
                        res.status(200).send(result)
                    }
                    else{
                        res.status(400).send({
                            message: "Invalid Credentials"
                        });
                    }
                }
            });
        } 
        catch (error) {
            console.error(error)
        }
    };

    signup = async (req, res) => {
		try {
            const {emailId, username, password, accountType} = req.body;
            const hashpassword = await bcrypt.hash(password, 10);
        
            let sql = "INSERT INTO users (emailId, username, password, accountType) VALUES (?, ?, ?, ?)";
            conn.query(sql, [emailId, username, hashpassword, accountType],
                async (err, result) => {
                    if (err) {
                        res.status(500);
                        console.log(err);
                        res.send("SQL error, Check log for more details");
                    } else {
                        const id = result.insertId;
                        const newuser = new UserDetails({userId: id, emailId: emailId, accountType: accountType});
                        await newuser.save();
                        res.status(200);
                        res.send({message: "User Created"});
                    }
                }
            );   
        }
        catch (error) { 
            console.error(error); 
        }
    };

    getuser = async (req, res) => {
		try {
            let sql = "SELECT * FROM users WHERE emailId = ?";
            const emailId = req.body.emailId;
            conn.query(sql, [emailId], function (err, result) {
                if (err) throw err;
                else{
                    res.status(200).send(result);
                }
            });
        }
        catch (error) {
             console.error(error); 
        }
    };

    getQuestionsAnswered = async (req, res) => {
        const {userId} = req.body;
        let results = [];
        try {
            let userDetails = await UserDetails.findOne({userId: userId});
            
            userDetails.questionsAnswered.foreach(async (qaPair) => {
                let question = await Questions.findById({_id : qaPair.questionId});
                results.push({
                    questionTitle: question.title,
                    tags: question.tags,
                    upvotes: question.upvotes,
                    isBest: true,
                    answerPostedTime: 0,
                  })
            });
      
            res.status(200).send(results);
          } catch (err) {
            console.error(err);
            res.status(400).send(err);
          }
    }
}

export default UserController;