const express = require("express");
const { getComments } = require("../controller/comment/getComments");
const { updatedComment } = require("../controller/comment/updatedComment");
const { createComments } = require("../controller/comment/createComment");
const { deleteComment } = require("../controller/comment/deleteComment");

const commentRouter = express.Router();
commentRouter
  .get("/comments", getComments)
  .put("/:id", updatedComment)
  .post("/addComment", createComments)
  .delete("/:id", deleteComment);

module.exports = commentRouter;
