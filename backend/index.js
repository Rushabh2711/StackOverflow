import mongoInit from "./src/db/config/mongo.config.js";
import app from "./app.js";
import questionRouter from "./src/modules/question/router/questions.js";
import userRouter from "./src/modules/user/router/users.js";
import testRouter from "./src/modules/test/router/test.js";

//initialize db
mongoInit();

app.use(questionRouter);
app.use(userRouter);
app.use(testRouter)