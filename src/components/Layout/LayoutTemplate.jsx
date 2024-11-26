import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Template from "../../template";

const LayoutTemplate = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-grow container mx-auto">
        <Template>
          <Outlet />
        </Template>
      </main>
    </div>
  );
};

export default LayoutTemplate;
