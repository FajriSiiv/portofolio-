import React from "react";
import { FaFigma, FaNodeJs } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { RiNextjsLine, RiTailwindCssLine } from "react-icons/ri";
import Layer from "../Section/Layer";
import AnimationReveal from "../Animation/AnimationReveal";

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
      <div className="flex justify-between items-center max-h-[200px] h-full w-full py-4 gap-x-5 px-10">
        <p className="font-matter text-2xl font-semibold flex-1">Skills</p>
        <div className="flex-[7] grid grid-flow-col">
          <CardSkill icon={<GrReactjs size={34} />} text="react" />
          <CardSkill icon={<RiNextjsLine size={34} />} text="nextJS" />
          <CardSkill icon={<FaNodeJs size={34} />} text="nodeJS" />
          <CardSkill icon={<FaFigma size={34} />} text="figma" />
          <CardSkill
            icon={<RiTailwindCssLine size={34} />}
            text="TailwindCSS"
          />
        </div>
      </div>
    </Layer>
  );
};

export default AboutMySkill;
