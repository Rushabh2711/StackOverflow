import { make_request } from "../../../../kafka/client.js";
import Questions from "../../../db/models/mongo/question.js";
import QuestionViews from "../../../db/models/mongo/questionViews.js";

class SearchController {

    fetchSearchResult = async (req, res) => {
        const text = "[java] user:12345 \"text\" is:question isaccepted:yes";
        // req.params.searchText;
        // "[java] user:12345 \"tex\" is:question isaccepted:yes";
        var results = [];
        const mySearchArray = text.split(" ");
        try {
            // get all question
            const questions = [];
            mySearchArray.forEach(s => {
                if(s.includes("[")) {
                    var tag = s.substring(1,s.length - 1);
                    console.log(tag);
                }
                else if(s.includes("user:")) {
                    var id = s.substring(5, s.length);
                    console.log(id);
                }
                else if(s.includes("is:question")) {
                    
                }
                else if(s.includes("isaccepted:yes")) {
                    
                }
                else{
                    console.log(s);
                }
        });
        console.log("after filter");
        res.status(200).send(results);
  
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    };

}

export default SearchController;