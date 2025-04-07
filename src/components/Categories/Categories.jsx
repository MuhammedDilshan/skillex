import React, { useEffect, useState } from "react";
import "./Categories.css";
import Sales from "../../assets/category1.png";
import dataAnalyst from "../../assets/category2.png";
import Copywriting from "../../assets/category3.png";
import Design from "../../assets/category4.png";

const Categories = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="categories">
      <h5>Unlimited access to 100+ instructors</h5>
      <ul className="tab_head">
        <li>All categories</li>
        <li>Entertainment</li>
        <li>Lifestyle</li>
        <li>Writing</li>
        <li>Business</li>
        <li>Food</li>
      </ul>

      <div className="categories_card">
        <div
          className="card_item scroll-card"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`, // Moves down as you scroll
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="card_image">
            <img src={Sales} alt="" />
          </div>
          <h6>Sales Marketing</h6>
          <p>4 month</p>
        </div>
        <div
          className="card_item scroll-card"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`, // Moves down as you scroll
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="card_image">
            <img src={dataAnalyst} alt="" />
          </div>
          <h6>Data analytics</h6>
          <p>3 month</p>
        </div>
        <div
          className="card_item scroll-card"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`, // Moves down as you scroll
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="card_image">
            <img src={Copywriting} alt="" />
          </div>
          <h6>Copywriting Pro</h6>
          <p>2 month</p>
        </div>
        <div
          className="card_item scroll-card"
          style={{
            transform: `translateY(${scrollY * 0.1}px)`, // Moves down as you scroll
            transition: "transform 0.2s ease-out",
          }}
        >
          <div className="card_image">
            <img src={Design} alt="" />
          </div>
          <h6>Design art</h6>
          <p>4 month</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
