import React from "react";
import logo from "./assets/images/HeaderImg.png";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import "./assets/css/Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/encyclopedia">
        <img src={logo} alt={"logo"} className="header__image"></img>
      </Link>
      <Link to="/categories" className="header__link">
        Categories
      </Link>
      <Link to="/add" className="header__link">
        Add new article
      </Link>
    </header>
  );
}

export default withRouter(Header);
