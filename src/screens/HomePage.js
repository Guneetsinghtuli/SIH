import React from "react";
import CharDham from "../Components/CharDham";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Package from "../Components/Package";
import Second from "../Components/Second";
import Third from "../Components/Third";

const HomePage = () => {
  return (
    <div>
      <Nav />
      <Second />
      <Third />
      <CharDham />
      <Package />
      <Footer />
    </div>
  );
};

export default HomePage;
