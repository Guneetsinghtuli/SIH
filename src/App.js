import React from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./screens/HomePage";
import HotelPage from "./screens/HotelPage";
// import Homestay from "./Components/Homestay";
import HomestaySupport from "./screens/HomestaySupport";
import FoodexperiencePage from "./screens/FoodexperiencePage";
import TravelPage from "./screens/TravelPage";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/hotel" element={<HotelPage />}/>
        <Route  path="/homestay" element={<HomestaySupport />}/>
        <Route  path="/food" element={<FoodexperiencePage />}/>
        <Route  path="/travel" element={<TravelPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
