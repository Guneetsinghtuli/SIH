import React from "react";
import "./css/CharDham.css";
import { FaLocationArrow } from "react-icons/fa";

const CharDham = () => {
  return (
    <div className="outer">

      <div className="text">
        <h1>
          <span>Char</span> Dhaam <span className="icon"><FaLocationArrow /></span> 
        </h1>
        <p>At one Dham</p>
      </div>

      <div className="cards">
        <div className="card one">
          <p>Kedarnath</p>
        </div>
        <div className="card two">
          <p>Badrinath</p>
        </div>
        <div className="card three">
            <p>Yamunotri</p>
        </div>
        <div className="card four">
            <p>Gangotri</p>
        </div>
      </div>
    </div>
  );
};

export default CharDham;
