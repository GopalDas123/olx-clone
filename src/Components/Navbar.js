import React from "react";
import "./Navbar.css";
import olx from "./olx.jpg";
import { GoSearch,GoPlus } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
// import { BsPlus } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="nav">
      <img className="logo" src={olx} alt="" />
      <div className="search__div">
        <GoSearch className="search__icon" />
        <input
          className="nav__input"
          type="text"
          placeholder="Search city,area or local"
        />
        <IoIosArrowDown className="search__icon" />
      </div>
      <div className="search__div2">
        <input
          className="nav__input nav__input2 "
          type="text"
          placeholder="Search city,area or local"
        />
        <GoSearch className="search__icon search__icon2" />
      </div>
      <div style={{display:"flex",justifyContent:'space-around',width:'20%'}}>

      <button className="login__btn">Login</button>
      <button className="sell__btn"><GoPlus className="add__icon"/>SELL</button>
      </div>
    </nav>
  );
};
export default Navbar;
