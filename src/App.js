import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
// import Categories from './Components/Categories'
import slider from './slider.png'
// import Categories from './Categories';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Categories/> */}
      <img src={slider} alt="header" className="slider"></img>
    </div>
  );
}

export default App;
