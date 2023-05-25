import React from "react";
import "./Title.scss";

export interface TitleProps {
  hero?: boolean;
  users?: boolean;
  signUp?: boolean;
}

const Title: React.FC<TitleProps> = ({ hero, users, signUp }) => {
  return hero ? (
    <h1 className="hero__title">Test assignment for front-end developer</h1>
  ) : (
    <h2 className="title">
      {(users && "Working with GET request") ||
        (signUp && "Working with POST request")}
    </h2>
  );
};

export default Title;
