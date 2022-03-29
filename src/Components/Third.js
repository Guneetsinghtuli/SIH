import React, { useContext, useState } from "react";
import "./css/third.css";
import Dropdown from "react-bootstrap/Dropdown";
import BudgetContext from "../context/budgetContext";

export const Third = () => {

  const [location, setlocation] = useState('Where ?')

  const context = useContext(BudgetContext);
  const {budget,setbudget} = context;

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
                {location}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={()=>{setlocation('Rishikesh')}}>Rishikesh</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={()=>{setlocation('Haridwar')}}>Haridwar</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={()=>{setlocation('Nainital')}}>Nainital</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={()=>{setlocation('Kedarnath')}}>Kedarnath</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown id="second">
              <Dropdown.Toggle variant="Primary" id="dropdown-basic">
                {budget}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1" onClick={()=>{setbudget('10000')}}>0 - 10,000</Dropdown.Item>
                <Dropdown.Item href="#/action-2" onClick={()=>{setbudget('20000')}}>10,000 - 20,000</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={()=>{setbudget('30000')}}>20,000 - 30,000</Dropdown.Item>
                <Dropdown.Item href="#/action-3" onClick={()=>{setbudget('40000')}}>30,000 + </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <button className="ThirdButton" onClick={()=>{window.scrollTo({top:1485,behavior:"smooth"})}}>Next Step</button>
      </div>
    </div>
  );
};

export default Third;
