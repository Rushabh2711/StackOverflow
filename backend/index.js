import mongoInit from "./src/db/config/mongo.config.js";
import app from "./app.js";
import questionRouter from "./src/modules/question/router/questions.js";
import searchRouter from "./src/modules/question/router/search.js";

//initialize db
mongoInit();

app.use(questionRouter);
app.use(searchRouter);
