import React, { useState } from "react";
import "./Banner.css";
import Banner1 from "../../assets/banner1.png";
import Header from "../Header/Header";

const Banner = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(0);
  };

  const cards = [
    {
      title: "Writing",
      description: "Course",
      image: Banner1,
    },
    {
      title: "Coding",
      description: "Course",
      image: Banner1,
    },
    {
      title: "Business",
      description: "Course",
      image: Banner1,
    },
  ];

  return (
    <div className="spotlight">
      <Header />
      <div className="banner">
        <div className="banner_textContainer">
          <div className="main_text">
            <h4>Watch.</h4>
            <h4>Learn.</h4>
            <h4>Grow.</h4>
          </div>

          <form action="" className="passion">
            <input type="text" placeholder="Find your passion" />
            <button className="go_btn">Go</button>
          </form>
        </div>
        <div className="banner_ImgContainer">
          {cards.map((item, index) => (
            <div
              key={index}
              className={`image_box ${hoveredIndex === index ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img src={item.image} alt="" />
              <div className="inside_text">
                <div className="first">
                  <h6>{item.title}</h6>
                  {hoveredIndex === index && <h6>{item.description}</h6>}
                </div>
                {hoveredIndex === index && (
                  <div className="second">
                    <h6>100</h6>
                    <p>TOPICS</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
