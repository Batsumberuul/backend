import express from "express";
import userRouter from "./router/users";

const app = express();
app.use(express.json());

const port = 8080;

app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`server running at a http://localhost:${port}/`);
});
