import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextUsers } from "../../redux/users/usersOperations";
import { getNextUrl } from "../../redux/users/usersSelector";
import "./Button.scss";

export interface ButtonProps {
  showMore?: boolean;
  signUp?: boolean;
  users?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  showMore,
  signUp,
  users,
  disabled = false,
}) => {
  const url = useSelector(getNextUrl);
  const dispatch = useDispatch();

  return (
    <button
      className="button"
      disabled={disabled}
      onClick={() => dispatch(nextUsers(url))}
    >
      {(showMore && "Show more") || (signUp && "Sign up") || (users && "Users")}
    </button>
  );
};
