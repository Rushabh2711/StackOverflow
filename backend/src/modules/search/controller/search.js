import { make_request } from "../../../../kafka/client.js";
import Questions from "../../../db/models/mongo/question.js";
import QuestionViews from "../../../db/models/mongo/questionViews.js";

class SearchController {

    fetchSearchResult = async (req, res) => {
        const text = "[java] user:12345 \"tex\" is:question isaccepted:yes";
        // req.params.searchText;
        // "[java] user:12345 \"tex\" is:question isaccepted:yes";
        var results = [];
        const mySearchArray = text.split(" ");
        try {
            let questions = await Questions.find({});
            mySearchArray.forEach(s => {
                if(s.includes("[")) {

                    var tag = s.substring(1,s.length - 1);
                    console.log(tag);
                    questions.forEach((q) => {
                        if(q.tags.includes(tag)) {
                            results.push(q);
                        }
                    })

                }
                else if(s.includes("user:")) {

                    var id = s.substring(5, s.length);
                    console.log(id);
                    questions.forEach((q) => {
                        if(q.userId === id) {
                            results.push({...q});
                        }
                        else{
                            q.answers.forEach((a) => {
                                if(a.userId === id) {
                                    results.push({...q});
                                }
                            })
                        }
                    });

                }
                else if(s.includes("is:question")) {

                    results.push({...questions});

                }
                else if(s.includes("is:answer")) {
                    
                    questions.forEach((q) => {
                        if(q.answers.length > 0) {
                            results.push({...q});
                        }
                    })

                }
                else if(s.includes("isaccepted:yes")) {

                    questions.forEach((q) => {
                        q.answers.forEach((a) => {
                            if(a.isBest) {
                                results.push({...q});
                                return;
                            }
                        })
                    })
                    
                }
                else if(s.includes("isaccepted:no")) {
                    
                    questions.forEach((q) => {
                        q.answers.forEach((a) => {
                            if(a.isBest) {
                                results.push({...q});
                            }
                        })
                    })

                }
                else{
                    console.log(s);
                    questions.forEach((q) => {
                        console.log(q.description.includes(s));
                        if(q.title.includes(s) || q.description.includes(s)) {
                            results.push({...q});
                        }
                        else {
                            q.answers.forEach((a) => {
                                if(a.description.includes(s)) {
                                    results.push({...q});
                                }
                            })
                        }
                    })
                }
                console.log("------change-------------");
                console.log(results);

                questions = [...results];
                results = [];
            });
            console.log("after filter");
            res.status(200).send(questions);
  
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    };

}

export default SearchController;