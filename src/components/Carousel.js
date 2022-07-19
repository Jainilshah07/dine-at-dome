import React from "react";
import img1 from "../assets/1stcard.jpg";
import img2 from "../assets/2ndcard.jpg";
import img5 from "../assets/5thcard.jpg";
import img7 from "../assets/7thcard.jpg";
import img8 from "../assets/8thcard.jpg";
import abt0 from "../assets/about0.jpg";
import Detailcard from "./Detailcard";
import Map from "./Map";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          {/* <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="6"></li> */}
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block carouselcard w-100 h-50" src={img7} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block carouselcard w-100 h-50" src={img1} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block carouselcard w-100 h-50" src={img5} alt="Third slide" />
          </div>
          {/* <div className="carousel-item">
            <img className="d-block w-100" src={img2} alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={img7} alt="Fifth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={abt0} alt="Sixth slide" />
          </div> */}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <br /><br /><br />

      <div className="container">
        <div className="row">
            <div className="col-6">
                <Detailcard/>
            </div>
            <div className="col-6">
                <Map/>
            </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
