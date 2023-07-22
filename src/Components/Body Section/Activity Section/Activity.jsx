import React from "react";
import "./activity.css";

// ===============>> import data
import {activity} from "../../../utils/data";
// ===============>> import Icons
import { BsArrowRightShort } from "react-icons/bs";

const Activity = () => {
  return (
    <div className="activitySection">

      <div className="heading flex">
        <h1>Recent Activity</h1>
        <button className="btn flex">
          See All <BsArrowRightShort className="icon" />
        </button>
      </div>

      <div className="secContainer grid">
        {activity.length &&
          activity.map((item) => (
            <div className="singleCustomer flex">
              <img src={item.image} alt="Customer" />

              <div className="customerDetails">
                <span className="name">{item.name}</span>
                <small>{item.status}</small>
              </div>

              <div className="duration">{item.duratuin} Min Ago</div>

            </div>
          ))}
      </div>
    </div>
  );
};

export default Activity;