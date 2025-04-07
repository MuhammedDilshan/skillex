import React from "react";
import Logo from "../../assets/logo.svg";
import "./Footer.css";
import footer_icon from "../../assets/footer_icon.svg";
import facebook from "../../assets/s1.svg";
import be from "../../assets/s2.svg";
import linked from "../../assets/s-3.svg";
import inst from "../../assets/s-4.svg";
import site from "../../assets/s-5.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_top">
        <div className="footer_logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className="footer_nav">
          <li>Find passion</li>
          <li>Categories</li>
          <li>Skills</li>
          <li>Customer</li>
        </ul>
        <div className="footer_community">
          <h6>Join our community</h6>
          <form action="" className="email">
            <input type="email" placeholder="Find your passion" />
            <button className="go_btn">Go</button>
          </form>
        </div>
      </div>

      <div className="footer_bottom">
        <div className="footer_b_left">
          <img src={footer_icon} alt="footer_icon" />
          <p>2021 Halo Lab. All rights reserved</p>
        </div>
        <ul className="social">
          <li>
            <img src={facebook} alt="facebook" />
          </li>
          <li>
            <img src={be} alt="be" />
          </li>
          <li>
            <img src={linked} alt="linked" />
          </li>
          <li>
            <img src={inst} alt="inst" />
          </li>
          <li>
            <img src={site} alt="site" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
