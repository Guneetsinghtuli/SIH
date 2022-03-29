// import React, { useEffect, useState } from "react";
import React from 'react'
import govtstay1 from '../images/govstay1.jpg';
import govstay2 from '../images/govstay2.jpg';
import govt3 from '../images/govt3.png';
// const Homestay = () => {
//   return (
//     <div>Homestay</div>
//   )
// }

// export default Homestay
import "./css/Governmentstays.css";

const Governmentstays = () => {
//   const [hotels, sethotels] = useState([]);
//   const navigate = useNavigate()
//   useEffect(() => {
//     fetch("http://sub-g.herokuapp.com/getHotels").then(async (data) => {
//       let dat = await data.json();
//       const slicedArray = dat.hotels.slice(0, 3);
//       sethotels(slicedArray);
//     });
//   }, []);

  return (
    <div className="hotel-outer">
      <div className="heading">
        <h1>Homestays</h1>
        <h2>Your Budget Left:</h2>
      </div>

      <div className="hotel-list">
        {/* {hotels.map((element, key) => { */}
          {/* return ( */}
            <div className="hotel">
              <div className="image-container">
              <img  alt="homestay" src={govtstay1} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">Badrinath (Yatri Niwas)</h1>
                    <p className="hotel-desc">Badrinath, Chamoli</p>
                  </div>

                  <div>
                    <div>
                      <p>3.9 star</p>
                    </div>
                    <div className="price-book">
                      <p>₹1000</p>
                      <div className="hotel-btn">
                        <button>Select This</button>
                        <button >Know More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hotel">
              <div className="image-container">
              <img  alt="homestay" src={govstay2} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">Rishikesh (Bharat Bhoomi Tourist Complex)</h1>
                    <p className="hotel-desc">Natraj Chowk, BSNL Colony, Haridwar - Dehradun Rd</p>
                  </div>

                  <div>
                    <div>
                      <p>3.9 star</p>
                    </div>
                    <div className="price-book">
                      <p>₹1200</p>
                      <div className="hotel-btn">
                        <button>Select This</button>
                        <button >Know More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hotel">
              <div className="image-container">
              <img  alt="homestay" src={govt3} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">AULI (Nanda Devi Eco Tourist Resort)</h1>
                    <p className="hotel-desc"> GHH6+8WG, Auli Laga Salude</p>
                  </div>

                  <div>
                    <div>
                      <p>4.3 star</p>
                    </div>
                    <div className="price-book">
                      <p>₹1100</p>
                      <div className="hotel-btn">
                        <button>Select This</button>
                        <button >Know More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* ); */}
        
      </div>
      <button className="load-btn">Load More</button>
    </div>
  );
};

export default Governmentstays;