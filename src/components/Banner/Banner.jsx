import React from "react";
import "./Banner.css";
import Banner1 from "../../assets/banner1.png";

const Banner = () => {
  return (
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
        <div className="image_box">
          <img src={Banner1} alt="" />
          <div className="inside_text">
            <div className="first">
              <h6>Writing </h6>
              <h6>Course</h6>
            </div>
            <div className="second">
              <h6>100</h6>
              <p>TOPICS</p>
            </div>
          </div>
        </div>
        <div className="image_box">
          <img src={Banner1} alt="" />
          <div className="inside_text">
            <div className="first">
              <h6>Writing </h6>
              <h6>Course</h6>
            </div>
            <div className="second">
              <h6>100</h6>
              <p>TOPICS</p>
            </div>
          </div>
        </div>
        <div className="image_box">
          <img src={Banner1} alt="" />
          <div className="inside_text">
            <div className="first">
              <h6>Writing </h6>
              <h6>Course</h6>
            </div>
            <div className="second">
              <h6>100</h6>
              <p>TOPICS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
