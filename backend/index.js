import mongoInit from "./src/db/config/mongo.config.js";
import app from "./app.js";
import questionRouter from "./src/modules/question/router/questions.js";
import multer from "multer";
import { uploadFile, downloadFile } from "./s3.cjs";
import userRouter from "./src/modules/user/router/users.js";
import testRouter from "./src/modules/test/router/test.js";
import tagRouter from "./src/modules/tags/router/tags.js";

//initialize db
mongoInit();

app.use(questionRouter);

//Storing documents/Images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log("Inside destination");
    console.log(file);

    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log("file multer", file);
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

//uplaod-file
app.post("/uploadImage", upload.single("file"), (req, res) => {
  console.log("After multers", req.files);
  const file = req.file;
  console.log(file);
  uploadFile(file).then((response) => {
    var data = {
      itemImage: response.Key,
    };
    console.log(response);
    res.status(200).send(JSON.stringify(data));
  });
});

//download-file
app.get("/download-file/:key", (req, res) => {
  console.log("inside download file", req.params.key);
  var key = req.params.key;
  console.log("key", key);
  const readStream = downloadFile(key);
  readStream.pipe(res);
  //console.log("image path", image)
  // if (fs.existsSync(image)) {
  //   res.sendFile(image)
  // }
  // else {
  //   res.end("image not found")
  // }
});

app.use(userRouter);
app.use(testRouter);
app.use(tagRouter);
