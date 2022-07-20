import React from "react";
import img1 from "../assets/1stcard.jpg";
import img2 from "../assets/2ndcard.jpg";
import img5 from "../assets/5thcard.jpg";
import img7 from "../assets/7thcard.jpg";
import img8 from "../assets/8thcard.jpg";
import abt0 from "../assets/about0.jpg";
import Booking from "./Booking";
import Detailcard from "./Detailcard";
import Map from "./Map";
import Nav2 from "./Nav2/Nav2";

const Carousel = () => {
  return (
    <>
    <Nav2/>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={img2} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img5} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img7} alt="Third slide" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br />
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-6">
            <Detailcard />
            <hr className="hr" />
            <Booking/>
          </div>
          <div className="col-6">
            <Map />
          </div>
        </div>

        <div className="row">
          <div className="col-6">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
