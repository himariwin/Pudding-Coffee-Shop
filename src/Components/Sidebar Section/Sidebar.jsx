import React from 'react';
import './sidebar.css';

// Imported Images ===>
import logo from '../../Assets/logo.png';

// Imported Icons ==> 
import {IoMdSpeedometer} from 'react-icons/io';
import {MdDeliveryDining} from 'react-icons/md';
import {MdOutlineExplore} from 'react-icons/md';
import {BsTrophy} from 'react-icons/bs';
import {AiOutlinePieChart} from 'react-icons/ai';
import {BiTrendingUp} from 'react-icons/bi';
import {MdOutlinePermContactCalendar} from 'react-icons/md';
import {BsCreditCard2Front} from 'react-icons/bs';
import { BsQuestion } from "react-icons/bs";


const Sidebar = () => {
  return (
    <div className='sideBar grid'>

      <div className="logoDiv flex">
        <img src={logo} alt="Logo Name" />
        <h2>Pudding.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
      
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <IoMdSpeedometer className="icon" />
              <span className="smallText">
                Dash board
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdDeliveryDining className="icon" />
              <span className="smallText">
                My Orders
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlineExplore className="icon" />
              <span className="smallText">
                Explore
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsTrophy className="icon" />
              <span className="smallText">
                Products
              </span>
            </a>
          </li>

        </ul>

      </div>
      
      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
      
        <ul className="menuLists grid">

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <AiOutlinePieChart className="icon" />
              <span className="smallText">
                Charts
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <BiTrendingUp className="icon" />
              <span className="smallText">
                Trends
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className="menuLink flex">
              <MdOutlinePermContactCalendar className="icon" />
              <span className="smallText">
                Contact
              </span>
            </a>
          </li>

          <li className="listItem">
            <a href="#" className='menuLink flex'>
              <BsCreditCard2Front className="icon" />
              <span className="smallText">
                Billing
              </span>
            </a>
          </li>

        </ul>

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
              Having a Problem? Just Call with Our Expert Team!
            </p>
            <button className="btn">Go to the Help </button>
          </div>

        </div>
      </div>
    </div>
  );
  
};

export default Sidebar;