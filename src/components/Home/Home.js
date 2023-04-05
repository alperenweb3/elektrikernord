import React from "react";
import Menu from "../common/Menu/Menu";
import SliderHome from "./SliderHome";
import OurProduct from "./OurProduct"
import WhoWeAre from "./WhoWeAre";
import Team from "../common/Team/Team"

import Footer from "../common/Footer/Footer"


const Home = () => {
  return (
    <>
      <Menu />
      <SliderHome />
      <WhoWeAre />
      <OurProduct />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
