import { useEffect, useState } from "react";
import { getUsers } from "./api/fetch";
import { userDelete } from "./api/delete";
import Users from "./components/Users";
import Header from "./components/Header";
import "./styles.css";
import { UserType, UsersType } from "./types";

export default function App() {
  const [allUsers, setAllUsers] = useState<any>([]);

  const fetchUser = async () => {
    const data = await getUsers();
    setAllUsers(data);
  };

  const deleteUser = async (userId: string) => {
    await userDelete(userId);
    const newUsers = allUsers.filter(({ id }: UserType) => id !== userId);
    setAllUsers(newUsers);
  };

  const updateUser = async () => {
    // missing API definition :(
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="App">
      {/* this header can be improved to a global layout for the application */}
      <Header />
      <Users users={allUsers} deleteUser={deleteUser} />
    </div>
  );
}
