import React from "react";
import Menu from "../common/Menu/Menu";
import SliderHome from "./SliderHome";
import WhoWeAre from "./WhoWeAre";
import OurProduct from "./OurProduct"
import RecentWork from "./RecentWork"
import Gallery from "./Gallery";
import Team from "../common/Team/Team"
import Footer from "../common/Footer/Footer"


const Home = () => {
  return (
    <>
      <Menu />
      <SliderHome />
      <WhoWeAre />
      <OurProduct />
      <RecentWork />
      <Gallery />
      <Team />
      <Footer />
    </>
  );
};

export default Home;
