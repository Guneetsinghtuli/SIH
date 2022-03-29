import React from "react";
import "./css/Package.css";

const Package = () => {
  return (
    <div className="package-outer">
      <div className="main-heading">
        <h1>Let’s Plan your trip <br /> Together </h1>
      </div>
      <div className="trip-plan">
        <div className="stay">
          <div className="head">
            <p>Where do you wanna <span>stay ?</span> </p>
          </div>
          <div className="main-card">
            <div className="outer-card">
              <div className="inner-card one"></div>
              <h2>Home Stay</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className="outer-card">
              <div className="inner-card two"></div>
              <h2>Private Hotels</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className="outer-card">
              <div className="inner-card three"></div>
              <h2>Govt. Hotels</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
          </div>
        </div>
        <div className="travel">
          <div className="head">
            <p>How you want to <span>Travel ?</span></p>
          </div>
          <div className="main-card">
            <div className="outer-card">
              <div className="inner-card one"></div>
              <h2>Rental Cabs</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className="outer-card">
              <div className="inner-card two"></div>
              <h2>Rental Bikes</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className="outer-card">
              <div className="inner-card three"></div>
              <h2>Local Transport</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
          </div>
        </div>
        <div className="food">
        <div className="head">
            <p>Are you a <span>foodie ?</span></p>
          </div>
          <div className="main-card">
            <div className="outer-card">
              <div className="inner-card one"></div>
              <h2>Home Stay</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className="outer-card">
              <div className="inner-card two"></div>
              <h2>Private Hotels</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className="outer-card">
              <div className="inner-card three"></div>
              <h2>Govt. Hotels</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Package;
