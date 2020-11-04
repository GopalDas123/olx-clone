import React, { useState } from "react";
import "./Navbar.css";
import olx from "./olx.jpg";
import { GoSearch, GoPlus } from "react-icons/go";
import { RiChat1Line } from "react-icons/ri";
import { VscBell } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const [error, setError] = useState("");
  const history = useHistory();
  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.pushState("./");
    } catch {
      console.log(error);
      setError("Failed To Logout");
    }
  }
  if (!currentUser) {
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
            placeholder="Find Cars, Mobile Phones & More"
          />
          <GoSearch className="search__icon search__icon2" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "20%",
          }}
        >
          <button className="login__btn">
            <Link to="./login">Login</Link>
          </button>
          <Link to="./signup">
            <button className="sell__btn">
              <GoPlus className="add__icon" />
              SELL
            </button>
          </Link>
        </div>
      </nav>
    );
  } else if (currentUser) {
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
            placeholder="Find Cars, Mobile Phones & More"
          />
          <GoSearch className="search__icon search__icon2" />
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "20%",
            alignItems:'center'
          }}
        >
          <RiChat1Line className="bell" style={{fontSize:'25px',marginLeft:'-40px',marginRight:'-10px'}}/>
          <VscBell className="bell" style={{fontSize:'23px',outline:'30px'}}/>
          <button onClick={handleLogout} className="login__btn">
            Logout
          </button>
          <Link to="./post">
            <button className="sell__btn">
              <GoPlus className="add__icon" />
              SELL
            </button>
          </Link>
        </div>
      </nav>
    );
  }
};
export default Navbar;
