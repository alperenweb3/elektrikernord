import React from 'react';
import { Route, Routes } from "react-router-dom";
// internal
import BackToTop from '../components/BackToTop';
import AnimateMouse from '../components/common/AnimateMouse';
import ContextProvider from '../components/context/ContextProvider';
import Home from '../components/Home/Home';
/*import HomeThree from '../components/HomeThree/HomeThree';
import HomeTwo from '../components/HomeTwo/HomeTwo';
import About from '../components/Pages/About/About';
import Blog from '../components/Pages/Blog/Blog';
import BlogDetails from '../components/Pages/BlogDetails/BlogDetails';
import ContactUs from '../components/Pages/ContactUs/ContactUs';
import FAQ from '../components/Pages/FAQ/FAQ';
import Portfolio from '../components/Pages/Portfolio/Portfolio';
import PortfolioDetails from '../components/Pages/PortfolioDetails/PortfolioDetails';
import Price from '../components/Pages/Price/Price';
import Service from '../components/Pages/Service/Service';
import ServiceDetails from '../components/Pages/ServiceDetails/ServiceDetails';
import TeamDetails from '../components/Pages/TeamDetails/TeamDetails';
import TeamPage from '../components/Pages/TeamPage/TeamPage';*/

const AppNavigation = () => {
    return (
      <ContextProvider>
        <AnimateMouse/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <BackToTop/>
      </ContextProvider>
    );
  };
  
  export default AppNavigation;