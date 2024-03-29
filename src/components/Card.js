import React from "react";
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
  const navigate = useNavigate() ;

  const handleClick = async (e) => {
    e.preventDefault();
    navigate("/destination");
}
  const isTitle = props.title;
  const isRating = props.rating;
  const isLocation = props.location;
  const hasDrinks = props.drinks;
  const hasRest = props.rest;
  const hasFeild = props.feild;
  return (
    <>
      <div className="card m-2" onClick={handleClick} style={{ width: "400px", height: "510px" }}>
        <img
          className="card-img-top card-img ml-2 mt-1 mr-1"
          src={props.source}
          alt="Card image cap"
          width={"600px"}
          height={"400px"}
        />
        <div className="card-body">
          <h5 className="card-title" style={{color:"rgb(255, 191, 102)"}}>{isTitle !== "" ? props.title : ""}</h5>
          <p className="card-text">{props.description}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            {isRating !== "" ? <img src={props.rating} alt="" /> : ""}
            <h5  style={{display:"inline-block",margin:"0 68px"}} >{isLocation !== "" ? props.location: ""}</h5> 
          </li>
        </ul>
        <div className="card-body">
          <a href="/" className="card-link">
            {hasRest !== "" ? <img src={props.rest} alt="" /> : ""}
          </a>

          <a href="/" className="card-link">
            {hasDrinks !== "" ? <img src={props.drinks} alt="" /> : ""}
          </a>

          <a href="/" className="card-link">
            {hasFeild !== "" ? <img src={props.feild} alt="" /> : ""}
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
