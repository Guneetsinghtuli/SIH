// import React, { useEffect, useState } from "react";
import React from 'react'

// const Homestay = () => {
//   return (
//     <div>Homestay</div>
//   )
// }

// export default Homestay
import "./css/Homestay.css";

const Homestay = () => {
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
              <img  alt="homestay" src={require('../images/homestay-image1.jpeg')} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">OYO 81140 Hotel Valley Wood Inn</h1>
                    <p className="hotel-desc">Officer Enclave, Mussoorie Rd, Rajpur, Dehradun, Uttarakhand 248001</p>
                  </div>

                  <div>
                    <div>
                      <p>4.5 star</p>
                    </div>
                    <div className="price-book">
                      <p>₹ 1200</p>
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
              <img  alt="homestay" src={require('../images/homestay-iimage2.jpeg')} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">OYO Flagship 14945 Hotel UK-07</h1>
                    <p className="hotel-desc">Rajpur Road, 11, Lane Number 3, Jakhan, Dehradun, Uttarakhand 248001</p>
                  </div>

                  <div>
                    <div>
                      <p>3.7 star</p>
                    </div>
                    <div className="price-book">
                      <p>₹ 1730</p>
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
              <img  alt="homestay" src={require('../images/homestay-image3.jpeg')} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">Gautam Homestay</h1>
                    <p className="hotel-desc">Near Central Secratrait, Dehradun</p>
                  </div>

                  <div>
                    <div>
                      <p>4.2 star</p>
                    </div>
                    <div className="price-book">
                      <p>₹ 1950</p>
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

export default Homestay;
