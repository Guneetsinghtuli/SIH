import React from 'react'
import './css/Travel.css'

const Travel = () => {
  return (
    <div className="hotel-outer">
      <div className="heading">
        <h1>Hotels</h1>
        <h2>Your Budget Left:</h2>
      </div>

      <div className="hotel-list">
            <div className="hotel">
              <div className="image-container">
                {/* <img src={element.images} alt="hotel" /> */}
              </div>

              <div className="hotel-data">
                <div className="divide">
                  <div>
                    <h1 className="hotel-name">Name</h1>
                    <p className="hotel-desc">Location</p>
                  </div>

                  <div>
                    <div>
                      <p>Rating</p>
                    </div>
                    <div className="price-book">
                      <p>3,000</p>
                      <div className="hotel-btn">
                        <button>Select This</button>
                        <button>Know More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <button className="load-btn">Load More</button>
    </div>
  )
}

export default Travel