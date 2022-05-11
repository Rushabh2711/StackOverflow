import { make_request } from "../../../../kafka/client.js";
import Posts from "../../../db/models/mongo/posts.js";
import QuestionViews from "../../../db/models/mongo/questionViews.js";

class SearchController {

    fetchSearchResult = async (req, res) => {
        const text = req.params.searchText;
        console.log(req.params.searchText);
        // req.params.searchText;
        // "[java] user:12345 \"tex\" is:question isaccepted:yes";
        var results = [];
        const mySearchArray = text.split(" ");
        try {
            let posts = await Posts.find({});
            // console.log(posts);
            mySearchArray.forEach(s => {

                // search by tag
                if(s.includes("[")) {

                    var tag = s.substring(1,s.length - 1);
                    console.log(tag);
                    posts.forEach((q) => {
                        if(q.postType === "question") {
                            q.questionTags.forEach((t) => {
                                if(t.name === tag) {
                                    results.push(q);
                                }
                            })
                        }
                    })

                }

                // search by user
                else if(s.includes("user:")) {

                    var id = s.substring(5, s.length);
                    console.log(id);
                    posts.forEach((q) => {
                        if(q.userId === id) {
                            results.push(q);
                        }
                    });

                }

                // is: type
                else if(s.includes("is:question")) {

                    posts.forEach((q) => {
                        if(q.postType === "question") {
                            results.push(q);
                        }
                    });

                }
                else if(s.includes("is:answer")) {
                    
                    posts.forEach((q) => {
                        if(q.postType === "answer") {
                            results.push(q);
                        }
                    });

                }

                // isaccepted type
                else if(s.includes("isaccepted:yes")) {

                    posts.forEach((q) => {
                        if(q.isAccepted) {
                            results.push(q);
                        }
                    });
                    
                }
                else if(s.includes("isaccepted:no")) {
                    
                    posts.forEach((q) => {
                        if(!q.isAcceptedAnswerId) {
                            results.push(q);
                        }
                    });

                }

                // search by string but with out space
                // "java"  -> accepted
                // "hello word" -> not accepted
                else{
                    console.log(s);
                    posts.forEach((q) => {
                        // console.log(q.description.includes(s));
                        if(q.questionTitle.includes(s) || q.description.includes(s)) {
                            results.push(q);
                        }
                    })
                }
                // console.log(results);

                posts = [...results];
                results = [];
            });
            console.log(posts.length);
            res.status(200).send(posts);
  
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    };


    getAllQuestions = async (req, res) => {

    try {
        let questions = await Posts.find({postType: "question"});
        questions.sort((a, b) => b.addedAt - a.addedAt);
        res.status(200).send(questions);
        } catch (err) {
            console.error(err);
            res.status(400).send(err);
        }
    }

}

export default SearchController;