const comments = [
  {
    id: 1,
    like: 30,
    message: "medeelel awii",
    createdTime: "2024/09/20",
  },
  {
    id: 2,
    like: 20,
    message: "dugaaraa",
    createdTime: "2024/09/20",
  },
];

exports.updatedComment = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  const updatedComment = comments.map((comment) => {
    if (comment.id === Number(id))
      (comment.message = body.message),
        (comment.like = body.like),
        (comment.createdTime = body.createdTime);
    return response.status(200).json({
      comments,
    });
  });
  // if (id) {
  //   response.status(200).send("Successfully updated");
  // } else {
  //   response.status(400).send(`comment ${id} updated failed`);
  // }
};
