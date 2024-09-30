import { sql } from "../../database";

export const createUser = async (request, response) => {
  const { email, name, createdAt, updatedAt } = request.body;

  const user = await sql`insert into Users (email, name, createdAt, updatedAt)
 values ('bold@gmail.com',  'bold', '2024/09/30', '2024/09/30')`;

  response.status(200).json({
    message: `Successfully created user`,
    user,
  });
};
