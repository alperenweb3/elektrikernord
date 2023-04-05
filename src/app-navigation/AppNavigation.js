import React from 'react';
import { Route, Routes } from "react-router-dom";
// internal
import BackToTop from '../components/BackToTop';
import AnimateMouse from '../components/common/AnimateMouse';
import ContextProvider from '../components/context/ContextProvider';
import Home from '../components/Home/Home';

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