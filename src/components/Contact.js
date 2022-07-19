import React from "react";
import contact from "../assets/contact.jpg";

const Contact = () => {
  return (
    <>
      <img className="contactimg" src={contact} alt="" 
      width={"100%"}
      height={517} />
      <br /><br />
      <div className="container contact">
        <h2>Contact Dine at Dome </h2>
        <h4>Questions about bookings –<b>support@dineatdome.com</b> </h4>
        <h4>General questions, cooperation, etc –<b>info@dineatdome.com</b> </h4>
        <br /><br />
        <h4> <b>Telephone:</b>  +44 20 3608 2097</h4><br /><br /><br /><br />
      </div>
       
    </>
  );
};

export default Contact;
