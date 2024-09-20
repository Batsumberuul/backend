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
  {
    id: 3,
    like: 21,
    message: "test",
    createdTime: "2024/09/20",
  },
];

exports.deleteComment = (require, response) => {
  const { id } = require.params;
  const filteredComments = comments.filter(
    (comment) => comment.id !== Number(id)
  );
  response.status(200).json(filteredComments);
};
