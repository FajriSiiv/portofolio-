import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import LayoutTemplate from "./components/Layout/LayoutTemplate";
import { animatePageIn } from "./utils/animation";
import Showcase from "./pages/Showcase";

const App = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   console.log("Location changed, animating...");
  //   animatePageIn();
  // }, [location]);
  return (
    <Routes>
      <Route element={<LayoutTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/showcase" element={<Showcase />} />
      </Route>
    </Routes>
  );
};

export default App;
