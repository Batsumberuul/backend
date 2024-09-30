exports.getUser = (request, response) => {
  const { id } = request.params;

  if (user) {
    response.status(200).json({
      user,
    });
  } else {
    response.status(400).send(`User ${id} not exist`);
  }
};
