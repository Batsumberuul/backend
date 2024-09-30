import { sql } from "../../database";

export const getUsers = async (request, response) => {
  const users = await sql`select * from Users`;

  response.status(200).json({
    users,
  });
};
