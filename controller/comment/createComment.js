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

exports.createComments = (request, response) => {
  comments.push({ ...request.body });
  response.status(200).json({
    message: "Successfully created comment",
    comments: comments,
  });
};
