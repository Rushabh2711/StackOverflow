import mongoInit from "./src/db/config/mongo.config.js";
import app from "./app.js";
import postRouter from "./src/modules/post/router/posts.js";

//initialize db
mongoInit();

app.use(postRouter);
