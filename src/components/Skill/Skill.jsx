import React from "react";
import "./Skill.css";
import LeaderShip from "../../assets/leadership.svg";
import list_line from "../../assets/list-line.svg";
import Responsibility from "../../assets/responsibility.svg";
import Flexibility from "../../assets/flexibility.svg";
import Skill_banner from "../../assets/skill-banner.png";

const Skill = () => {
  return (
    <div className="skill">
      <div className="skill_top">
        <div className="left_content">
          <h6>Get the skills you</h6>
          <h6>need for a job that</h6>
          <h6>is in demand</h6>
        </div>
        <div className="right_content">
          <p>
            The modern labor market dictates its own terms. Today, to be a
            competitive specialist requires more than professional skills.
          </p>
        </div>
      </div>

      <div className="skill_bottom">
        <div className="bottom_left">
          <div className="skill_details">
            <div className="image_details">
              <div className="img_icon">
                <img src={LeaderShip} alt="" />
              </div>
              <div className="line-img">
                <img src={list_line} alt="" />
              </div>
            </div>
            <div className="text_details">
              <h6>Leadership</h6>
              <p>Fully committed to the success company</p>
            </div>
          </div>
          <div className="skill_details">
            <div className="image_details">
              <div className="img_icon">
                <img src={Responsibility} alt="" />
              </div>
              <div className="line-img">
                <img src={list_line} alt="" />
              </div>
            </div>
            <div className="text_details">
              <h6>Responsibility</h6>
              <p>Employees will always be my top priority</p>
            </div>
          </div>
          <div className="skill_details">
            <div className="image_details">
              <div className="img_icon">
                <img src={Flexibility} alt="" />
              </div>
            </div>
            <div className="text_details">
              <h6>Flexibility</h6>
              <p>The ability to switch is an important skill</p>
            </div>
          </div>
        </div>

        <div className="bottom_right">
          <div className="count_box">
            <div className="experience">
              <div className="count">10</div>
              <div className="count_text">
                <h6>Years</h6>
                <h6>experiences</h6>
              </div>
            </div>
            <div className="experience">
              <div className="count">250</div>
              <div className="count_text">
                <h6>types </h6>
                <h6>of courses</h6>
              </div>
            </div>
          </div>
          <div className="bottom_right_image">
            <img src={Skill_banner} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
