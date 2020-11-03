import React from "react";

const loggedInNav = () => {
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
};

export default loggedInNav;
