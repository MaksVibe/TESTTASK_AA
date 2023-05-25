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
  type?: any;
}

export const Button: React.FC<ButtonProps> = ({
  showMore,
  signUp,
  users,
  disabled = false,
  type,
}) => {
  const url = useSelector(getNextUrl);
  const dispatch = useDispatch();

  return (
    <>
      {!showMore && !type && (
        <a href={users ? "#users" : signUp ? "#singUp" : ""} className="link">
          {users && "Users"}
          {signUp && "Sing up"}
        </a>
      )}
      {(showMore || type) && (
        <button
          style={showMore ? { maxWidth: "120px" } : {}}
          className="button"
          disabled={disabled}
          onClick={() => showMore && dispatch(nextUsers(url))}
          type={type ? type : undefined}
        >
          {(showMore && "Show more") ||
            (signUp && "Sign up") ||
            (users && "Users")}
        </button>
      )}
    </>
  );
};
