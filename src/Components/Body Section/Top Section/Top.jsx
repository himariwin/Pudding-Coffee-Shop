import React from "react";
import "./top.css";

// Import Icon ==============>>>
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { BsArrowRightShort, BsQuestion } from "react-icons/bs";

// Import Icon ==============>>>

// Import Image ==============>>>
import userProfile_0 from "../../../Assets/profileOne.jpg";
import cappucino from "../../../Assets/027.png";

// Import Video ==============>>>
import videoFrame from "../../../Assets/video.mp4";
// Import Video ==============>>>

import "./top.css";
const Top = () => {
  return (
    <div className="topSection">
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome To Pudding.</h1>
          <p>Hello Angel, Welcome Back! ♡ </p>
        </div>

        <div className="searchBar flex">
          <input type="text" name="" id="" placeholder="Search Dashboard" />
          <BiSearchAlt className="icon" />
        </div>

        <div className="adminDiv flex">
          <TbMessageCircle className="icon" />
          <MdOutlineNotificationsNone className="icon" />
          <div className="adminImage">
            <img src={userProfile_0} alt="admin Img" />
          </div>
        </div>
      </div>

      <section className="cardSection flex">
        <div className="rightCard flex">
          <h1>The Best Bakery for You</h1>
          <p> "because like bakeries, life is also sweet!" </p>
          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video loop autoPlay muted>
              <source src={videoFrame} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>
              <div className="flex">
                <span>
                  Today <br></br>
                  <small>44 Orders</small>
                </span>
                <span>
                  This Month <br></br>
                  <small>127 Orders</small>
                </span>
              </div>
              <span className="flex link">
                Go to my Order <BsArrowRightShort className="icon" />
              </span>
            </div>

            <div className="imgDiv">
              <img src={cappucino} alt="My Img" />
            </div>
          </div>
          {/* We Shal Use this card letter   */}
          <div className="sideBarCard">
            <div className="circle">
              <b></b>
              <b></b>
              <BsQuestion className="icon"></BsQuestion>
            </div>
            <div className="cardContent">
              <div className="circle1"></div>
              <div className="circle2"></div>
              <h3>Help Center</h3>
              <p>
                Having a Problem ! Just Call with Us Expert Call you To Soon !:)
              </p>
              <button className="btn">GO To the Help </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Top;