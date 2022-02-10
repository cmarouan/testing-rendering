import User from "./User";
import { UsersType } from "../types";
import "./users.scss";

type UsersComponentType = {
  deleteUser?: Function;
  users: UsersType;
};

const Users = ({ users, deleteUser }: UsersComponentType) => {
  return (
    <div className="users__container">
      {users?.map((user: any, index: number) => (
        <User user={user} key={`index${index}`} deleteUser={deleteUser} />
      ))}
    </div>
  );
};

export default Users;
