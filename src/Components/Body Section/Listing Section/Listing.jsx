import React from "react";
import "./listing.css";

// ===============>> import Icons
import { BsArrowRightShort } from "react-icons/bs";

// ===============>> import Images
import userImg from "../../../Assets/profileOne.jpg";
import profileTwo from "../../../Assets/profileTwo.jpg";
import profileThree from "../../../Assets/profileThree.jpg";
import profileFour from "../../../Assets/profileFour.jpg";

import { heroContent } from "../../../utils/data";

const Listing = () => {
  return (
    <div className="lisitingSection">
      <div className="heading flex">
        <h1>My Listing</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer flex">
        {heroContent.length &&
          heroContent.map((item) => (
            <div className="singleItem">
              <item.heartIcon className="icon" />
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
            </div>
          ))}
      </div>

      <section className="sellers flex">

        <div className="topSellers">

          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort />
            </button>
          </div>

          <div className="card flex">

            <div className="users">
              <img src={userImg} alt="User1" />
              <img src={profileTwo} alt="User2" />
              <img src={profileThree} alt="User3" />
              <img src={profileFour} alt="User4" />
            </div>

            <div className="cardText">
              <span>
                14.556 Orders Sold <br />
                <small>
                  21 Sellers <span className="date">7 Days</span>
                </small>
              </span>
            </div>

          </div>

        </div>

        <div className="featuredSellers">
          <div className="heading flex">
            <h3>Featured Sellers</h3>
            <button className="btn flex">
              See All <BsArrowRightShort />
            </button>
          </div>

          <div className="card flex">

            <div className="users">
              <img src={profileFour} alt="User4" />
              <img src={userImg} alt="User1" />
              <img src={profileThree} alt="User3" />
              <img src={profileTwo} alt="User2" />
            </div>

            <div className="cardText">
              <span>
                2,856 Cakes Sold <br />
                <small>
                  85 Sellers <span className="date">31 Days</span>
                </small>
              </span>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
};

export default Listing;