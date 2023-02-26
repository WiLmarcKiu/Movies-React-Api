import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import TrendingSection from "./components/TrendingSection";
// import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="container">
      <Navigation />
      <HeroSection />
      <TrendingSection />
    </div>
  );
}

export default App;
