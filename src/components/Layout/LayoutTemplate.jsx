import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Template from "../../template";

const LayoutTemplate = () => {
  return (
    <>
      <Navbar />
      <main className="flex-grow container mx-auto">
        <Template>
          <Outlet />
        </Template>
      </main>
    </>
  );
};

export default LayoutTemplate;
