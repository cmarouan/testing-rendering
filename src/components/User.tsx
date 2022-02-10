import { UserType } from "../types";
import "./user.scss";

type UserComponentType = {
  deleteUser?: Function;
  user: UserType;
};

const User = ({ user, deleteUser }: UserComponentType) => {
  const { Email, name, id, avatar } = user || {};

  return (
    <div className="user__container">
      <div className="user__container-image">
        <img alt="users image" src={avatar} />
      </div>
      <div className="user__container-info">
        <div className="user__container-info-name">{name}</div>
        <div className="user__container-info-email">{Email}</div>
        <div className="user__container-info-actions">
          <div className="user__container-info-actions-update">edit</div>
          <div
            className="user__container-info-actions-delete"
            onClick={() => deleteUser && deleteUser(id)}
          >
            delete
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
