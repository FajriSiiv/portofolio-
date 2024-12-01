import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Template from "../../template";
import LenisProvider from "../../utils/LenisWrapper";

const LayoutTemplate = () => {
  return (
    <>
      <Navbar />
      <LenisProvider>
        <main className="flex-grow container mx-auto">
          <Template>
            <Outlet />
          </Template>
        </main>
      </LenisProvider>
    </>
  );
};

export default LayoutTemplate;
