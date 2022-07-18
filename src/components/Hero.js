import React from "react";
import img1 from "../assets/1stcard.jpg";
import img2 from "../assets/2ndcard.jpg";
import img3 from "../assets/3rdcard.jpg";
import img4 from "../assets/4thcard.jpg";
import img5 from "../assets/5thcard.jpg";
import img6 from "../assets/6thcard.jpg";
import img7 from "../assets/7thcard.jpg";
import img8 from "../assets/8thcard.jpg";
import Card from "./Card";

const Hero = () => {
  return (
    <>
      <div class="container">
          <div class="row">
            <div className="col-md-12 d-flex justify-content-end">
            <Card source={img1}
              title="Bring in your “social-bubble”"
              description="Book your own, private dome for a memorable and safe dining experience"/>
            <Card
              source={img5}
              title="The Lancaster Arms"
              description="A classic country pub for eating & drinking."
            /> 
            <Card 
              source={img2}
              title="The Willow Tree"
              description="Elegant shabby chic restaurant with al fresco terrace."
            />
            </div>
          </div>
          <br />
          <div class="row">
            <div className="col-md-12 d-flex justify-content-end">
            <Card source={img7}
              title="Bring in your “social-bubble”"
              description="Book your own, private dome for a memorable and safe dining experience"/>
            <Card
              source={img8}
              title="The Lancaster Arms"
              description="A classic country pub for eating & drinking."
            /> 
            <Card 
              source={img5}
              title="The Willow Tree"
              description="Elegant shabby chic restaurant with al fresco terrace."
            />
            </div>
          </div>
          <br />
        </div>
    </>
  );
};

export default Hero;
