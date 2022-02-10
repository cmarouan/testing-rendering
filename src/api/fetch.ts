import { UsersType } from "../types";

export const getUsers = async (): Promise<UsersType> => {
  const response = await fetch(
    "https://60ded6cbabbdd9001722d0b1.mockapi.io/users"
  );

  return await response.json();
};
