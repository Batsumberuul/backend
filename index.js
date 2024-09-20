// import { createServer, request } from "http";
const express = require("express");

const userRouter = require("./router/users");
const commentRouter = require("./router/comment");

const app = express();
app.use(express.json());

const port = 8080;

app.use("/user", userRouter);
app.use("/comment", commentRouter);

// const server = createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-Type", "text/plain");
//   response.end("Hello World!");
// });

// app.get("/articles", (request, response) => {
//   response.send("Hello Response From Express");
// });

// app.post("/addArticle", (request, response) => {
//   const { title } = request.body;
//   console.log(request.body);
//   response.send(`Product successfully added ${title}`);
// });

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
