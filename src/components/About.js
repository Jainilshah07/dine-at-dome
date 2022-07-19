import React from "react";
import about0 from "../assets/about0.jpg";
import img7 from "../assets/7thcard.jpg";
import img8 from "../assets/8thcard.jpg";
import img3 from "../assets/3rdcard.jpg";
import img4 from "../assets/4thcard.jpg";
import safety from "../assets/safety.png";
import sanitize from "../assets/sanitize.png";
import socialdistancing from "../assets/social-distancing.png";
import grp from "../assets/grp.png";

const About = () => {
  return (
    <div className="about">
      <img className="aboutimg" src={about0} alt="" />
      <br />
      <br />
      <div className="container">
        <div style={{ height: "80vh" }} className="row">
          <div className="col-6 abtcontent">
            <div style={{ color: "white" }} className="container">
              <h5>POSSIBLY THE SAFEST WAY TO DINE OUT</h5>
              <br />
              <h3>
                Enjoy dining out without compromises on safety and comfort
              </h3>
              <br />
              <h5>
                Our new reality doesn’t mean you should be getting less from
                life by staying at home. Now you can dine out with your close
                ones in a clean and safe private space.
              </h5>
            </div>
          </div>
          <div className="col-6">
            <div className="container">
              <img className="imgcardcontact" src={img7} alt="" />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="container">
        <div style={{ height: "80vh" }} className="row">
          <div className="col-6">
            <div className="container">
              <img className="imgcardcontact" src={img8} alt="" />
            </div>
          </div>
          <div className="col-6 abtcontent">
            <div style={{ color: "white" }} className="container">
              <h5>UP TO 2.5 HOURS LONG DINING EXPERIENCE</h5>
              <br />
              <h2>
              Book your own, private dome for a memorable and safe dining experience
              </h2>
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="container">
        <div style={{ height: "80vh" }} className="row">
          <div className="col-6 abtcontent">
            <div style={{ color: "white" }} className="container">
              <h5>AL-FRESCO DINING IN ANY WEATHER & ANY CLIMATE</h5>
              <br />
              <h3>
              Enjoy eating outside, yet stay sheltered from the elements and other guests
              </h3>
              <br />
            </div>
          </div>
          <div className="col-6">
            <div className="container">
              <img className="imgcardcontact" src={img3} alt="" />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="container">
        <div style={{ height: "80vh" }} className="row">
          <div className="col-6">
            <div className="container">
              <img className="imgcardcontact" src={img4} alt="" />
            </div>
          </div>
          <div className="col-6 abtcontent">
            <div style={{ color: "white" }} className="container">
              <h5>EXTRAORDINARY WAY TO DINE OUT</h5>
              <br />
              <h2>
              Admire 360° panoramic views from the comfort of your invisible pod
              </h2>
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>




      <hr className="hr"/>
      <div className="container">
        <h2>We care about your safety</h2><br />
        <div className="row">
          <div className="col-6 abtcards">
            <img className="abticon" src={grp} alt="" /><br />
            <h3>Social distancing from other groups</h3><br />
            <h4>Dine in a dome experience strictly follows and complies with official regulations regarding social distancing at restaurants</h4>
          </div>
          <div className="col-6">
          <img className="abticon" src={sanitize} alt="" /><br />
          <h3>Sanitising after each and every guest</h3><br />
          <h4>All domes are thoroughly cleaned, sanitised and ventilated for 30 minutes after each group of guests. We take hygiene seriously</h4>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            
          </div>
          <div className="col-6">

          </div>
        </div>
      </div>

      <br /><br /><br /><br />
      <div className="container"><br />
        <div className="row">
          <div className="col-6 abtcards">
            <img className="abticon" src={socialdistancing} alt="" /><br />
            <h3>Social distancing from other groups</h3><br />
            <h4>Dine in a dome experience strictly follows and complies with official regulations regarding social distancing at restaurants</h4>
          </div>
          <div className="col-6">
          <img className="abticon" src={safety} alt="" /><br />
          <h3>Sanitising after each and every guest</h3><br />
          <h4>All domes are thoroughly cleaned, sanitised and ventilated for 30 minutes after each group of guests. We take hygiene seriously</h4>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-6">
            
          </div>
          <div className="col-6">

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
