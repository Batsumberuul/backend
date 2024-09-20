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
  {
    id: 3,
    firstName: "Jan",
    lastName: "July",
  },
];

exports.deleteUser = (require, response) => {
  const { id } = require.params;
  const filteresUsers = users.filter((user) => user.id !== Number(id));
  response.status(200).json({
    filteresUsers,
  });
};
