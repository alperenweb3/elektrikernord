import React from "react";
import Menu from "../common/Menu/Menu";
import SliderHome from "./SliderHome";
import OurProduct from "./ServiceAbout"
import WhoWeAre from "./WhoWeAre";


const Home = () => {
  return (
    <>
      <Menu />
      <SliderHome />
      <WhoWeAre />
      <OurProduct />
    </>
  );
};

export default Home;
