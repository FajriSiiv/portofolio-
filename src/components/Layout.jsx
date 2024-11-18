import React from "react";
import { Link, Outlet } from "react-router-dom";
import TransitionLink from "./TransitionLink";
import Template from "../template";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-600 text-white py-4 fixed w-screen">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-lg font-bold">My App</h1>
          <div className="flex gap-4">
            <TransitionLink label="Home" href="/" />
            <TransitionLink label="About" href="/about" />
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto">
        <Template>
          <Outlet />
        </Template>
      </main>
    </div>
  );
};

export default Layout;
