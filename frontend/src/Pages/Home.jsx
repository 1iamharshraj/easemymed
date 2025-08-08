import React from "react";
import Navbar from "../Component/Navbar";
import { NewHero, MainContent, AIPillars, Impact, Products } from "../Component/AITransformer";
import Footer from "../Component/Footer";
import Mockup from "../Component/Mockup";
import NewFeatures from "../Component/NewFeatures";
import Faq from "../Component/Faq";

const Home = () => {
  return (
    <div>
      <Navbar />
      <NewHero />
      <MainContent />
      <NewFeatures />
      <Mockup />
      <AIPillars />
      <Impact />
      <Products />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;