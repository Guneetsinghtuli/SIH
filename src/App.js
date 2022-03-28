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
import TravelPage from "./screens/TravelPage";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<HomePage />}/>
        <Route  path="/hotel" element={<HotelPage />}/>
        <Route  path="/travel" element={<TravelPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
