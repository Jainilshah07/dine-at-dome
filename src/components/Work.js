import React from "react";
import Card from "./Card";
import img1 from "../assets/2ndcard.jpg";
import img5 from "../assets/5thcard.jpg";
import img6 from "../assets/6thcard.jpg";

const Work = () => {
  return (
    <>
      <div className="container">
        <h2>How it works?</h2>
        <h3>Book your private dining pod for magical evenings, relaxing lunches and all kinds of celebrations.</h3>
        <div class="row">
          <div className="col-md-12 d-flex justify-content-end">
            <Card
              source={img1}
              title="Bring in your “social-bubble”"
              description="Book your own, private dome for a memorable and safe dining experience"
            />
            <Card
              source={img5}
              title="The Lancaster Arms"
              description="A classic country pub for eating & drinking."
            />
            <Card
              source={img6}
              title="The Willow Tree"
              description="Elegant shabby chic restaurant with al fresco terrace."
            />
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Work;
