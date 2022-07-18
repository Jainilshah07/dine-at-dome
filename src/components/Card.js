import React from "react";

const Card = (props) => {
  
  return (
    <>
          <div className="card m-2" style={{width: "400px" ,height:"510px" }}>
            <img  
              className="card-img-top card-img ml-2 mt-1 mr-1"
              src={props.source}
              alt="Card image cap"
              width={"600px"}
              height={"400px"}
            />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Rating</li>
            </ul>
            <div className="card-body">
              <a href="/" className="card-link">
                img 1
              </a>
              <a href="/" className="card-link">
                img 2
              </a>
        </div>
      </div>
    </>
  );
};

export default Card;
