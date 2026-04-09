import React from "react";
import Hero from "./Hero";
import StatsCards from "./Stats";
import Catergory from "./Catergory";

const Home = () => {
  return (
    <div className="text-white p-8">
      <Hero />
      <StatsCards />
      <Catergory />
    </div>
  );
};

export default Home;
