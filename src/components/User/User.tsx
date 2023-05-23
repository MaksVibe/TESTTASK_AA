import React from "react";
import "./User.scss";

export interface UserProps {
  user: {
    name: string;
    email: string;
    phone: string;
    position: string;
    photo: string;
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  const { name, email, phone, position, photo } = user;

  return (
    <div className="user__wrapper">
      <img src={photo} alt={name} className="user__photo" />
      <br />
      <p>{name}</p>
      <br />
      <p>{position}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </div>
  );
};

export default User;
