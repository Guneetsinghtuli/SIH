import React from 'react'
import bike from '../images/bike.jpeg';
import car from '../images/car.jpeg';
import bus from '../images/bus.jpeg';

// const Homestay = () => {
//   return (
//     <div>Homestay</div>
//   )
// }

// export default Homestay
import "./css/Travel2.css";

const Travel2 = () => {
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
              <img  alt="homestay" src={bike} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">Bike Rental</h1>
                    <p className="hotel-desc">Dehradun</p>
                  </div>

                  <div>
                    <div>
                      <p>3.9 star</p>
                    </div>
                    <div className="price-book">
                      <p>₹200 per day</p>
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
              <img  alt="homestay" src={car} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">Rishikesh Rentals</h1>
                    <p className="hotel-desc">Natraj Chowk, Rishikesh</p>
                  </div>

                  <div>
                    <div>
                      <p>3.9 star</p>
                    </div>
                    <div className="price-book">
                      <p>₹500 per day</p>
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
              <img  alt="homestay" src={bus} />
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">Local Transport</h1>
                    <p className="hotel-desc"> GHH6+8WG, Auli Laga Salude</p>
                  </div>

                  <div>
                    <div>
                      <p>4.3 star</p>
                    </div>
                    <div className="price-book">
                      <p>Prices may vary</p>
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

export default Travel2;