import React from "react";
import Workcard from "./Workcard";
import img1 from "../assets/2ndcard.jpg";
import img5 from "../assets/5thcard.jpg";
import img6 from "../assets/6thcard.jpg";

const Work = () => {
  return (
    <div className="work">
      <div className="container">
        <h2>How it works?</h2>
        <h3>Book your private dining pod for magical evenings, relaxing lunches and all kinds of celebrations.</h3>
        <div className="row">
          <div className="col-md-12 d-flex justify-content-end">
            <Workcard
              source={img1}
              description="Book your own, private dome for a memorable and safe dining experience"
            />
            <Workcard
              source={img5}
              description="A classic country pub for eating & drinking."
            />
            <Workcard
              source={img6}
              description="Elegant shabby chic restaurant with al fresco terrace."
            />
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  );
};

export default Work;
