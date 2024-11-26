import React from "react";
import { motion } from "framer-motion";
import Layer from "../components/Section/Layer";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Button from "../components/Button/button";
import "../index.css";
import transparentGridImg from "../assets/homepage-grid.png";
import AboutMySkill from "../components/Home/AboutMySkill";
import Showcase from "../components/Home/Showcase";
import { WhatIDo } from "../components/Home/What-i-do";
import AnimationReveal from "../components/Animation/AnimationReveal";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <div className="pt-24">
      <Layer className="">
        <div className="overflow-hidden w-full h-[500px] flex justify-center items-center relative text-primary xs:h-[400px]">
          <div className="flex-[2] flex justify-center items-center flex-col z-10 cursor-default p-10 xs:p-2 sm:p-4">
            <AnimationReveal delaySec={0.6}>
              <p className="text-[40px] font-extrabold leading-tight uppercase text-center xs:text-lg sm:text-2xl">
                Hello, I'm Fajri.
              </p>
            </AnimationReveal>
            <AnimationReveal delaySec={0.6}>
              <h1 className="text-[40px] font-extrabold leading-tight uppercase text-center xs:text-lg sm:text-2xl">
                A Skilled in <span className="text-[#9381ff]"> React</span>,{" "}
                <span className="text-[#eb5e28]">Next.js</span>, and
                <span className="text-[#ffca3a]"> node.js</span>. focused on
                responsive, high-performance websites.
              </h1>
            </AnimationReveal>
            <div className="flex justify-center items-center mt-5 gap-x-3">
              <Button
                text="Github"
                icon={<BsGithub />}
                components="a"
                href="https://ui.shadcn.com/docs/installation/vite"
                target="_blank"
              />
              <Button text="LinkedIn" icon={<BsLinkedin />} />
            </div>
            <img
              src={transparentGridImg}
              alt="homepage grid"
              className="absolute right-0 top-0 translate-x-1/3 -z-10 w-[1000px] h-[500px] object-contain opacity-40 md:object-cover"
            />
          </div>
        </div>
      </Layer>

      <AboutMySkill />
      <WhatIDo />
      <Showcase />
      <Contact />
    </div>
  );
};

export default Home;
