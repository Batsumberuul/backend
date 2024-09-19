const express = require("express");
const { getUsers } = require("../controller/users/getUsers");
const { getUser } = require("../controller/users/getUser");
const { createUser } = require("../controller/users/createUser");
const { deleteUser } = require("../controller/users/deleteUser");
const UserRouter = express.Router();

UserRouter.get("/", getUsers)
  .get("/:id", getUser)
  .post("/addUser", createUser)
  .delete("/:id", deleteUser);

module.exports = UserRouter;
