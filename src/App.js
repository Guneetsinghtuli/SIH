import React from "react";
import CharDham from "./Components/CharDham";
import Second from "./Components/Second";
import './App.css'
import Third from "./Components/Third";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
    <Second />
    <Third />
      <CharDham />
      <Footer />
    </div>
  );
};

export default App;
