// import React, { useEffect, useState } from "react";
import React from 'react'

// const Homestay = () => {
//   return (
//     <div>Homestay</div>
//   )
// }

// export default Homestay
import "./css/Foodexperience.css";

const Foodexperience = () => {
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
        <h1>Food Experiences</h1>
        <h2>Your Budget Left:</h2>
      </div>

      <div className="hotel-list">
        {/* {hotels.map((element, key) => { */}
          {/* return ( */}
            <div className="hotel">
              <div className="image-container">
              <img  alt="homestay" src={require('../images/food1.png')} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">Jungle Fiesta Multi Cuisine Restaurant</h1>
                    <p className="hotel-desc">Gas Godam Chouraha, Gas Godam Road, Kaladhungi Rd, Haldwani, Uttarakhand 263139</p>
                  </div>

                  <div>
                    <div>
                      <p>4.6 star</p>
                    </div>
                    <div className="price-book">
                      <p>₹ 700</p>
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
              <img  alt="homestay" src={require('../images/food2.jpg')} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">Cafe Veranda By Harshikhar</h1>
                    <p className="hotel-desc"> Hotel Harshikhar, Bhimtal, Uttarakhand 263136</p>
                  </div>

                  <div>
                    <div>
                      <p>4.9 star</p>
                    </div>
                    <div className="price-book">
                      <p>₹ 530</p>
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
              <img  alt="homestay" src={require('../images/food3.jpg')} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">Café De Piccolo</h1>
                    <p className="hotel-desc">180, Rajpur Rd, Near Sai Mandir, Kishanpur, Dehradun, Uttarakhand 248009</p>
                  </div>

                  <div>
                    <div>
                      <p>4.3 star</p>
                    </div>
                    <div className="price-book">
                      <p>₹ 650</p>
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

export default Foodexperience;
