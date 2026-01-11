import React from "react";
import { FaFigma, FaNodeJs, FaVuejs } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import Layer from "../Section/Layer";
import AnimationReveal from "../Animation/AnimationReveal";
import { SiNuxtdotjs } from "react-icons/si";

const AboutMySkill = () => {
  const CardSkill = ({ icon, text, className, classNameText }) => {
    return (
      <div className={`flex justify-center items-center gap-x-1 ${className}`}>
        {icon}
        <h2 className={`text-[25px] font-semibold capitalize ${classNameText}`}>
          {text}
        </h2>
      </div>
    );
  };

  return (
    <Layer className="bg-opacity-0 shadow-none">
      <div className="flex justify-between items-center max-h-[200px] h-full w-full py-4 gap-x-5 px-10 xs:flex-col xs:max-h-fit xs:gap-y-4">
        {/* <p className="font-matter text-2xl font-semibold flex-1">Skills</p> */}
        <div className="flex-[7] grid grid-cols-5 gap-3 xs:flex xs:flex-col xs:gap-y-4 sm:grid-cols-2 sm:grid-rows-4 sm:gap-5">
          <CardSkill icon={<GrReactjs size={30} />} text="react" />
          <CardSkill icon={<RiNextjsLine size={30} />} text="nextJS" />
          <CardSkill icon={<FaNodeJs size={30} />} text="nodeJS" />
          <CardSkill icon={<FaFigma size={30} />} text="figma" />
          <CardSkill icon={<FaVuejs size={30} />} text="vue" />
          <CardSkill icon={<SiNuxtdotjs size={30} />} text="nuxt" />
          <CardSkill
            icon={<RiTailwindCssLine size={30} />}
            text="TailwindCSS"
          />
        </div>
      </div>
    </Layer>
  );
};

export default AboutMySkill;
