import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import User from "../../components/User/User";
import { fetchUsers } from "../../redux/users/usersOperations";
import { getUsers } from "../../redux/users/usersSelector";
import "./Users.scss";

const Users: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="users__wrapper">
      <Title users />
      {users && (
        <>
          <ul className="users__list">
            {users.map((user: any) => (
              <li key={user.id} className="users__item">
                <User user={user} />
              </li>
            ))}
          </ul>
          <Button showMore />
        </>
      )}
    </div>
  );
};

export default Users;
