import React from "react";
import img1 from "../assets/1stcard.jpg";
import img2 from "../assets/2ndcard.jpg";
// import img3 from "../assets/3rdcard.jpg";
// import img4 from "../assets/4thcard.jpg";
import img5 from "../assets/5thcard.jpg";
// import img6 from "../assets/6thcard.jpg";
import img7 from "../assets/7thcard.jpg";
import img8 from "../assets/8thcard.jpg";
import rating8 from "../assets/rating4.8.png";
import rating9 from "../assets/rating4.9.png";
import rating5 from "../assets/rating5.0.png";
import rest from "../assets/chef.png";
import drinks from "../assets/juice-box.png";
import field from "../assets/field.png";

import Card from "./Card";

const Hero = () => {
  return (
    <>
      <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-end">
            <Card source={img1}
              title="Bring in your “social-bubble”"
              description="Book your own, private dome for a memorable and safe dining experience"
              rating={rating8}
              drinks={drinks} 
              rest={rest}
              field={field}
              />
            <Card
              source={img5}
              title="The Lancaster Arms"
              description="A classic country pub for eating & drinking."
              rating={rating9}
              drinks={drinks} 
              rest={rest}
            /> 
            <Card 
              source={img2}
              title="The Willow Tree"
              description="Elegant shabby chic restaurant with al fresco terrace."
              rating={rating8}
              drinks={drinks} 
              rest={rest}
              field={field}
            />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-12 d-flex justify-content-end">
            <Card source={img7}
              title="Bring in your “social-bubble”"
              description="Book your own, private dome for a memorable and safe dining experience"
              rating={rating5}
              drinks={drinks} 
              rest={rest}/>
              
            <Card
              source={img8}
              title="The Lancaster Arms"
              description="A classic country pub for eating & drinking."
              rating={rating8}
              drinks={drinks} 
              rest={rest}
            /> 
            <Card 
              source={img5}
              title="The Willow Tree"
              description="Elegant shabby chic restaurant with al fresco terrace."
              rating={rating9}
              drinks={drinks} 
              rest={rest}
            />
            </div>
          </div>
          <br />
        </div>
        <hr />
    </>
  );
};

export default Hero;
