import React from "react";
import "./Home.css";
import Navbar from "./Components/Navbar";
import Categories from "./Components/Categories";
import slider from "./slider.png";
import olxApp from "./olxApp.png";
import Product from "./Components/Product";
import FreshProducts from "./Components/FreshProducts";

function Home() {
  return (

    <div className="App">
      <Navbar />
      <Categories />
      <img src={slider} alt="header" className="slider"></img>
      <div className="sugg-cont">
        <p className="based">Based on your last search</p>
        <div className="sugg">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <FreshProducts />
      <div className="mCont">
        <button className="more">Load more</button>
      </div>
      <img src={olxApp} alt="olxApp" className="slider olx-app"></img>
      <div className="footer">
        <div>
          <h2>POPULAR CATEGORIES</h2>
          <p>Cars</p>
          <p>Flats for rent</p>
          <p>Job</p>
          <p>Mobile Phones</p>
        </div>
        <div>
          <h2>TRENDING SEARCHES</h2>
          <p>Bikes</p>
          <p>Watches</p>
          <p>Books</p>
          <p>Dogs</p>
        </div>
        <div>
          <h2>ABOUT US</h2>
          <p>About OLX Group</p>
          <p>OLX Blog</p>
          <p>Contact Us</p>
          <p>OLX for Businesses</p>
        </div>
        <div>
          <h2>OLX</h2>
          <p>Help</p>
          <p>Sitemap</p>
          <p>Legal & Privacy Information</p>
        </div>
      </div>
      <footer>
        <p>
          <b>Other Countries </b>
          India - South Africa - Indonesia
        </p>
        <p>
          <b>Free Classifieds in Pakistan</b> .© 2006-2020 OLX
        </p>
      </footer>
    </div>
  );
}

export default Home;
