import React from "react";
// import mainImg from "../assets/Dine-at-Dome-home.jpg";
import styles from "./Main.css";
import Navbar from "./Navbar";
// import search from "../assets/search.png";
import cocktail from "../assets/cocktail.png";
import hotel from "../assets/hotel.png";
import pub from "../assets/pub.png";
import Distilleries from "../assets/Distilleries.png";
import golf from "../assets/golf-ball.png";
import countryHouse from "../assets/countryHouse.png";
import woolyImages from "./WoolyImages";

const Main = () => {
  const randomImage = woolyImages[Math.floor(Math.random() * woolyImages.length)];
  return (
    <>
      <div className="main">
        <Navbar/>
        <img className="img" src={randomImage} alt="" />
        <caption>
          <h1>Dine at Dome</h1>
          <h5>
            Unique and memorable <br />
            dining experiences, near you.
          </h5>
          <br />
          <select name="region" id="region">
            <optgroup label="All Regions" />
            <optgroup label="Asia">
              <option value="India">India</option>
            </optgroup>
            <optgroup label="Canada">
              <option value="quebec">Quebec</option>
            </optgroup>
            <optgroup label="United Kingdom">
              <option value="England">England</option>
              <option value="North Ireland">North Ireland</option>
              <option value="Scotland">Scotland</option>
              <option value="Wales">Wales</option>
            </optgroup>
            <optgroup label="United States">
              <option value="Maine">Maine</option>
              <option value="New York">New York</option>
              <option value="Pennsylvania">Pennsylvania</option>
            </optgroup>
          </select>
          <input type="text" value="Search" name="txtBox"></input>
          <br /><br /><br /><br /> <br /><br />
          <div className="icons">
            {/* <a>Restaurants</a> */}
            <ul>
              <li><a>
                <figure>
                  <img src={hotel} alt="" />
                  <p>Restaurants</p>
                </figure></a>
              </li>
              <li><a>
                <figure>
                  <img src={cocktail} alt="" />
                  <p>Drinks n bar</p>
                </figure></a>
              </li>
              <li><a>
                <figure>
                  <img src={hotel} alt="" />
                  <p>Hotel</p>
                </figure></a>
              </li>
              <li><a>
                <figure>
                  <img src={pub} alt="" />
                  <p>Pub</p>
                </figure></a>
              </li>
              <li><a>
                <figure>
                  <img src={countryHouse} alt="" />
                  <p>Country House</p>
                </figure></a>
              </li>
              <li><a>
                <figure>
                  <img src={golf} alt="" />
                  <p>Golf</p>
                </figure></a>
              </li>
              <li><a>
                <figure>
                  <img src={Distilleries} alt="" />
                  <p>Distilleries</p>
                </figure></a>
              </li>
            </ul>
          </div>
        </caption>
      </div>
    </>
  );
};

export default Main;
