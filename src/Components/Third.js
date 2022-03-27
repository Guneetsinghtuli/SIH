import React from "react";
import "./css/third.css";
import Dropdown from "react-bootstrap/Dropdown";

export const Third = () => {
  return (
    <div className="secondFlex">
      <div>
        <img
          className="thirdImg"
          alt="timer"
          src={require("../images/bag2.PNG")}
        />
      </div>
      <div className="details">
        <p className="thirdHeading">
          <span className="ThirdSpan">Where</span> in Uttarakhand ?
        </p>

        <div className="right-container">
          <div>
            <Dropdown id="first">
              <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
                Where ?
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Rishikesh</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Haridwar</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Nainital</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Kedarnath</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown id="second">
              <Dropdown.Toggle variant="Primary" id="dropdown-basic">
                Your Budget
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">0 - 10,000</Dropdown.Item>
                <Dropdown.Item href="#/action-2">10,000 - 20,000</Dropdown.Item>
                <Dropdown.Item href="#/action-3">20,000 - 30,000</Dropdown.Item>
                <Dropdown.Item href="#/action-3">30,000 + </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <button className="ThirdButton">Submit</button>
      </div>
    </div>
  );
};

export default Third;
