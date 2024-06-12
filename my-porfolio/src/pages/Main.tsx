import React from "react";
import Header from "../components/Header/Header";
import Portfolio from "../components/Porfolio/Portfolio";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import NewSlider from "../components/NewSlider/NewSlider";


const Main = () => {
  return (
    <div className="pt-[110px] px-4 w-[100%]">
      <Header />
      <NewSlider />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
