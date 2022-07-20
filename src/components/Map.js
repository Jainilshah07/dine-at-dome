import React from 'react'
import map1 from "../assets/usMap.jpg"
import map2 from "../assets/map2.png"

const Map = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <img src={map1} alt="" />
        </div>
        <br />
        <div className="row">
          <img src={map2} alt="" />
        </div>
        <br /><br />
      </div>
    </>
  )
}

export default Map
