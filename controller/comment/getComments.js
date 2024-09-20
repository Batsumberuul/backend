const comments = [
  {
    id: 1,
    like: 30,
    message: "medeelel awii",
    createdTime: "",
  },
  {
    id: 2,
    like: 20,
    message: "dugaaraa",
    createdTime: "2024/09/20",
  },
];

exports.getComments = (request, response) => {
  response.status(200).json({
    message: "all comment",
    comments: comments,
  });
};
