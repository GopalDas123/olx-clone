import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import slider from "./slider.png";
import Product from "./Components/Product";
import FreshProducts from './Components/FreshProducts';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Categories />
      <img src={slider} alt="header" className="slider"></img>
      <div className="sugg-cont">
        <p className="based">Based on last search</p>
        <div className="sugg">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <FreshProducts/>
    </div>
  );
}

export default App;
