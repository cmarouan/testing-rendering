export const userDelete = async (id: string): Promise<any> => {
  const response = await fetch(
    `https://60ded6cbabbdd9001722d0b1.mockapi.io/users/${id}`,
    {
      method: "DELETE",
    }
  );

  return await response.json();
};
