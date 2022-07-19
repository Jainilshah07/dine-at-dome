import React from 'react'

const Workcard = (props) => {
    const isTitle = props.title;
  return (
    <>
      <div className="card m-2" style={{ width: "400px", height: "500px" }}>
        <img
          className="card-img-top card-img ml-2 mt-1 mr-1"
          src={props.source}
          alt="Card image cap"
          width={"600px"}
          height={"400px"}
        />
        <div className="card-body">
          <h5 className="card-title">{isTitle !== "" ? props.title : ""}</h5>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </>
  )
}

export default Workcard
