import express from "express";
import { getUsers } from "../controller/users/getUsers";
import { createUser } from "../controller/users/createUser";

const userRouter = express.Router();

userRouter.get("/", getUsers);
userRouter.post("/", createUser);

export default userRouter;
