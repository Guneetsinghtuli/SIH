import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Hotels.css";

const Hotels = () => {
  const [hotels, sethotels] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    fetch("http://sub-g.herokuapp.com/getHotels").then(async (data) => {
      let dat = await data.json();
      const slicedArray = dat.hotels.slice(0, 3);
      sethotels(slicedArray);
    });
  }, []);

  return (
    <div className="hotel-outer">
      <div className="heading">
        <h1>Hotels</h1>
        <h2>Your Budget Left:</h2>
      </div>

      <div className="hotel-list">
        {hotels.map((element, key) => {
          return (
            <div className="hotel">
              <div className="image-container">
                <img src={element.images} alt="hotel" />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">{element.hName}</h1>
                    <p className="hotel-desc">{element.hLoc}</p>
                  </div>

                  <div>
                    <div>
                      <p>{element.hRating}</p>
                    </div>
                    <div className="price-book">
                      <p>{element.hPrice}</p>
                      <div className="hotel-btn">
                        <button>Select This</button>
                        <button onClick={()=>{navigate( "//"+ element.hUrl)}}>Know More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="load-btn">Load More</button>
    </div>
  );
};

export default Hotels;
