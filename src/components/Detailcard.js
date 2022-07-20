import React from 'react'
import safety from "../assets/safety.png";
import sanitize from "../assets/sanitize.png";
import socialdistancing from "../assets/social-distancing.png";
import grp from "../assets/grp.png";
import cocktail from "../assets/cocktail.png";
import hotel from "../assets/hotel.png";
import pub from "../assets/pub.png";
import Distilleries from "../assets/Distilleries.png";
import golf from "../assets/golf-ball.png";
import countryHouse from "../assets/countryHouse.png";
import Booking from './Booking';

const Detailcard = () => {
  return (
    <>
      {/* Title desc loca... */}
      <div className="container">
        <div className="row">
          <h2 style={{color:"rgb(255, 191, 102)"}}>The Willow Tree</h2>
          <h3></h3>
          <h4>A relaxed restaurant with locally sourced food. A serene ambience for an exquisite dining experience just 25 miles south of New York</h4>
        </div> <br /><br />
        {/* We Care About You */}
        <h2>We Care About You</h2><br /><br />
        <div className="row ml-5">
          <div className="col-3">
            <img src={grp} alt="" />
            <figcaption><br /> Big Groups X</figcaption>

          </div>
          <div className="col-3">
            <img src={sanitize}  alt="" />
            <figcaption><br /> Sanitize </figcaption>
          </div>
          <div className="col-3">
            <img src={safety} alt="" />
            <figcaption><br /> Take Care </figcaption>
          </div>
          <div className="col-3">
            <img src={socialdistancing} alt="" />
            <figcaption><br /> Maintain Distance </figcaption>
          </div>
        </div><br />

        {/* Facilites */}
        <h2> Facilites</h2><br /><br />
        <div className="row ml-5">
          <div className="col-3">
            <img src={pub} alt="" />
            <figcaption><br />  Pubs & Inns</figcaption>
          </div>
          <div className="col-3">
            <img src={countryHouse}  alt="" />
            <figcaption><br /> Country House </figcaption>
          </div>
          <div className="col-3">
            <img src={golf} alt="" />
            <figcaption><br /> Golf Park </figcaption>
          </div>
          <div className="col-3">
            <img src={hotel} alt="" />
            <figcaption><br /> 5 Star Hotel </figcaption>
          </div>
        </div><br />

        {/* <Booking/> */}

      </div>
    </>
  )
}

export default Detailcard
