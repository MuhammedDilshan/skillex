import React from "react";
import Logo from "../../assets/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="" />
      </div>
      <nav>
        <li>Find passion</li>
        <li>Categories</li>
        <li>Skills</li>
        <li>Customer</li>
      </nav>
      <div className="header_buttons">
        <button className="login">Login</button>
        <button className="free">Free Trial</button>
      </div>
    </header>
  );
};

export default Header;
