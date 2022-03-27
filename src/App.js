import React from "react";
import CharDham from "./Components/CharDham";
import Second from "./Components/Second";
import './App.css'
import Third from "./Components/Third";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div>
    <Second />
    <Third />
      <CharDham />
    </div>
  );
};

export default App;
