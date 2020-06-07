import React from "react";
import { Link } from "react-router-dom";
import Music from "../Music/Music";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img className="logoNasa" src="/images/logo-nasa.png" alt="logo nasa" />
      </Link>
      <div className="menu">
        <Music />
        <a href="https://www.linkedin.com/in/aurelien-badre/">
          <img
            className="logoLinkedin"
            src="/images/logo-linkedin.png"
            alt="logo linkedin"
          />
        </a>
        <a href="https://www.linkedin.com/in/aurelien-badre/">
          <img
            className="logoGithub"
            src="/images/logo-github.png"
            alt="logo github"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
