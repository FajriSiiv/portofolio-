import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import LayoutTemplate from "./components/Layout/LayoutTemplate";

const App = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   animatePageIn();
  // }, [location]);
  return (
    <Routes>
      <Route element={<LayoutTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};

export default App;
