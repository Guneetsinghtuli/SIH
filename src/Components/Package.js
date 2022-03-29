import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import BudgetContext from "../context/budgetContext";
import "./css/Package.css";

const Package = () => {
  const naviagte = useNavigate();

  
  const [stay, setstay] = useState('')
  const [travel, setTravel] = useState('')
  const [foodie, setfoodie] = useState('')

  const change = (change,func) =>{
    func(change)
  }

  const check = () =>{
    if(stay != ''  && travel != '' && foodie != ''){
      console.log(stay)
      if(stay == "Home Stay"){
        naviagte("/homestay")
      }else if(stay == "Private Hotels"){
        naviagte("/hotel")
      }
      else{
        Navigate("/govtstay")
      }
    }
  }

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
            <div className={`outer-card ${stay == 'Home Stay' && 'select'}`} onClick={(e)=>{change('Home Stay',setstay,e)}}>
              <div className="inner-card one"></div>
              <h2>Home Stay</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className={`outer-card ${stay == 'Private Hotels' && 'select'}`} onClick={(e)=>{change('Private Hotels',setstay,e)}}>
              <div className="inner-card two"></div>
              <h2>Private Hotels</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className={`outer-card ${stay == 'Govt. Hotels' && 'select'}`} onClick={(e)=>{change('Govt. Hotels',setstay,e)}}>
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
            <div className={`outer-card ${travel == 'Rental Cabs' && 'select'}`} onClick={(e)=>{change('Rental Cabs',setTravel,e)}}>
              <div className="inner-card one"></div>
              <h2>Rental Cabs</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className={`outer-card ${travel == 'Rental Bikes' && 'select'}`} onClick={(e)=>{change('Rental Bikes',setTravel,e)}}>
              <div className="inner-card two"></div>
              <h2>Rental Bikes</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className={`outer-card ${travel == 'Local Transport' && 'select'}`} onClick={(e)=>{change('Local Transport',setTravel,e)}}>
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
            <div className={`outer-card ${foodie == 'Local Food' && 'select'}`} onClick={(e)=>{change('Local Food',setfoodie,e)}}>
              <div className="inner-card one"></div>
              <h2>Local Food</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className={`outer-card ${foodie == 'Restaurant' && 'select'}`} onClick={(e)=>{change('Restaraunt',setfoodie,e)}}>
              <div className="inner-card two"></div>
              <h2>Restaraunt</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
            <div className={`outer-card ${foodie == 'Cafetaria' && 'select'}`} onClick={(e)=>{change('Cafeteria',setfoodie,e)}}>
              <div className="inner-card three"></div>
              <h2>Cafeteria</h2>
              <div className="all-features">
                <div className="feature">Reduced Cost</div>
                <div className="feature">Local Interaction</div>
              </div>
            </div>
          </div>
          <br></br>
          <button className="ThirdButton" onClick={()=>{check()}}>Let's Plan</button>
        </div>
      </div>
      
    </div>
  );
};

export default Package;
