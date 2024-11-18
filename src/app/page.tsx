import React from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection"
import Cards from "./components/Cards";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Cards/>
    </>
  );
}
