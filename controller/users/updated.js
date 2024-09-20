const users = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
  },
  {
    id: 2,
    firstName: "James",
    lastName: "Bond",
  },
];
exports.updatedUser = (request, response) => {
  const { id } = request.params;
  const { body } = request;

  if (id) {
    response.status(200).send("successfully updated user");
  } else {
    response.status(400).send(`user ${id} updated failed `);
  }
};
