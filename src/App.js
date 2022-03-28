import React from "react";
import CharDham from "./Components/CharDham";
import Second from "./Components/Second";
import './App.css'
import Third from "./Components/Third";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <div>
    <Nav />
    <Second />
    <Third />
      <CharDham />
      <Footer />
    </div>
  );
};

export default App;
