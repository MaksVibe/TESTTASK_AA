import React from "react";
import logo from "../../assets/images/Logo.png";
import { Button } from "../../components/Button/Button";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <>
      <div className="header__block"></div>
      <header className="header">
        <div className="header__wrapper">
          <a href="/" style={{ display: "flex" }}>
            <img src={logo} alt="Logo Testtask" className="logo" />
          </a>
          <div className="buttonWrapper">
            <Button users />
            <Button signUp />
          </div>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {};

export default Header;
